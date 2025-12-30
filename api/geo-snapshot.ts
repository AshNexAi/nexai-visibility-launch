import OpenAI from "openai";

// Phase 1: Space/Category association questions (broad, about the space in general)
const SPACE_ASSOCIATION_QUESTIONS = [
  "What concepts, services, or problem areas are commonly associated with this space?",
  "What types of companies or platforms are usually referenced in AI-generated answers about this space?",
  "What attributes are typically highlighted when AI systems explain this space?",
];

/**
 * Extracts key terms/phrases from text using simple heuristics
 * Returns an array of significant words/phrases (2+ words or important single words)
 */
function extractKeyTerms(text: string): string[] {
  const lowerText = text.toLowerCase();
  
  // Remove common stop words and punctuation
  const stopWords = new Set([
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by",
    "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did",
    "will", "would", "should", "could", "may", "might", "must", "can", "this", "that", "these", "those",
    "it", "its", "they", "them", "their", "we", "our", "you", "your", "i", "my", "me", "he", "she", "his", "her",
  ]);
  
  // Extract phrases (2-4 words) and significant single words
  const words = lowerText
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopWords.has(w));
  
  const phrases: string[] = [];
  const significantWords: string[] = [];
  
  // Extract 2-3 word phrases
  for (let i = 0; i < words.length - 1; i++) {
    const twoWord = `${words[i]} ${words[i + 1]}`;
    phrases.push(twoWord);
    
    if (i < words.length - 2) {
      const threeWord = `${words[i]} ${words[i + 1]} ${words[i + 2]}`;
      phrases.push(threeWord);
    }
  }
  
  // Collect significant single words (appear multiple times or are longer)
  const wordCounts = new Map<string, number>();
  words.forEach((w) => {
    if (w.length > 4) {
      wordCounts.set(w, (wordCounts.get(w) || 0) + 1);
    }
  });
  
  wordCounts.forEach((count, word) => {
    if (count > 1 || word.length > 6) {
      significantWords.push(word);
    }
  });
  
  // Combine and deduplicate
  const allTerms = [...phrases, ...significantWords];
  return Array.from(new Set(allTerms)).slice(0, 50); // Limit to top 50 terms
}

/**
 * Compares category associations vs brand associations to find strengths and gaps
 */
function compareAssociations(
  categoryText: string,
  brandText: string,
  brandName: string
): {
  strengths: string[];
  gaps: string[];
} {
  const categoryTerms = extractKeyTerms(categoryText);
  const brandTerms = extractKeyTerms(brandText);
  
  // Find strengths: terms that appear strongly in brand response
  const strengths: string[] = [];
  const brandTextLower = brandText.toLowerCase();
  
  // Look for category terms that also appear in brand response
  categoryTerms.forEach((term) => {
    if (brandTextLower.includes(term)) {
      // Count occurrences in brand text
      const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      const matches = brandTextLower.match(regex);
      if (matches && matches.length >= 2) {
        strengths.push(`Strong association with ${term}`);
      }
    }
  });
  
  // Also check for brand-specific descriptors
  const brandDescriptors = brandTerms.filter((term) => {
    // Terms that appear multiple times in brand text but not in category text
    const brandCount = (brandTextLower.match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
    const categoryCount = (categoryText.toLowerCase().match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
    return brandCount > categoryCount && brandCount >= 2;
  });
  
  brandDescriptors.slice(0, 3).forEach((term) => {
    strengths.push(`Frequently described in the context of ${term}`);
  });
  
  // Find gaps: important category associations missing from brand response
  const gaps: string[] = [];
  const brandTextLowerForGaps = brandText.toLowerCase();
  
  categoryTerms.forEach((term) => {
    // Check if this category term is important (appears multiple times in category text)
    const categoryCount = (categoryText.toLowerCase().match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
    
    // If it's important in category but weak/absent in brand
    if (categoryCount >= 2 && !brandTextLowerForGaps.includes(term)) {
      gaps.push(`Weak association with ${term}`);
    } else if (categoryCount >= 2) {
      const brandCount = (brandTextLowerForGaps.match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
      if (brandCount < categoryCount / 2) {
        gaps.push(`Rarely cited alongside ${term}`);
      }
    }
  });
  
  // Ensure we have at least some results
  if (strengths.length === 0) {
    strengths.push(`Strong association with "${brandName}" in relevant discovery contexts`);
    strengths.push(`Frequently described in the context of industry-related topics`);
  }
  
  if (gaps.length === 0) {
    gaps.push(`Weak association with adjacent discovery categories`);
    gaps.push(`Rarely cited alongside related use cases or comparisons`);
  }
  
  return {
    strengths: strengths.slice(0, 5), // Limit to top 5
    gaps: gaps.slice(0, 5), // Limit to top 5
  };
}

// Vercel serverless function entrypoint
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  console.log("🔍 GEO Snapshot API called - Method:", req.method);

  if (req.method !== "POST") {
    console.log("❌ Method not allowed:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { brand, website } = req.body || {};

  // Validate brand is required
  if (!brand || typeof brand !== "string" || !brand.trim()) {
    console.log("❌ Missing or invalid brand:", brand);
    return res.status(400).json({ error: "brand is required" });
  }

  const input = brand.trim();
  const brandOrDomain = website && website.trim() ? website.trim() : input;
  
  console.log("📥 Processing GEO snapshot for:", input);
  if (website) {
    console.log("🌐 Using domain for brand question:", brandOrDomain);
  }

  // Check if OpenAI API key is configured
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("❌ OPENAI_API_KEY is not configured!");
    return res.status(500).json({
      error: "Unable to generate GEO snapshot at this time.",
    });
  }

  // Log API key status (without exposing the actual key)
  console.log("✅ OpenAI API key found (length:", apiKey.length, "chars, starts with:", apiKey.substring(0, 7) + "...)");

  // Initialize OpenAI client with API key (inside handler to ensure env var is available)
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  try {
    // PHASE 1: Space/Category Associations
    console.log("📊 Phase 1: Asking about space/category associations...");
    const spaceQuestions = SPACE_ASSOCIATION_QUESTIONS.map((q) => 
      q.replace("this space", input.toLowerCase())
    );
    
    console.log("📋 Space questions:", spaceQuestions);
    const spacePromises = spaceQuestions.map((question, index) => {
      console.log(`📞 Phase 1 call ${index + 1}/${spaceQuestions.length}:`, question.substring(0, 60) + "...");
      return openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      });
    });

    const spaceResponses = await Promise.all(spacePromises);
    const categoryText = spaceResponses
      .map((response) => response.choices[0]?.message?.content || "")
      .join("\n\n");
    
    console.log("✅ Phase 1 complete. Category text length:", categoryText.length, "characters");

    // PHASE 2: Brand-Specific Associations
    console.log("🎯 Phase 2: Asking about brand-specific associations...");
    const brandQuestion = `How is ${brandOrDomain} typically described or associated in AI-generated answers?`;
    console.log("📋 Brand question:", brandQuestion);
    
    const brandResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: brandQuestion,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const brandText = brandResponse.choices[0]?.message?.content || "";
    console.log("✅ Phase 2 complete. Brand text length:", brandText.length, "characters");

    // PHASE 3: Comparison & Inference
    console.log("🔍 Phase 3: Comparing associations to find strengths and gaps...");
    const { strengths, gaps } = compareAssociations(categoryText, brandText, input);
    
    console.log("✅ Strengths found:", strengths.length);
    console.log("✅ Gaps found:", gaps.length);

    const result = {
      strengths,
      visibilityGaps: gaps,
      whyItMatters:
        "AI-generated answers favor brands tightly associated with specific discovery contexts. Missing associations can reduce visibility in those answer types.",
    };

    console.log("✅ GEO Snapshot result:", JSON.stringify(result, null, 2));

    return res.status(200).json(result);
  } catch (error) {
    console.error("❌ OpenAI API error:", error);
    console.error("❌ Error details:", JSON.stringify(error, null, 2));

    // Handle OpenAI-specific errors
    if (error instanceof Error) {
      if (error.message.includes("timeout") || error.message.includes("TIMEOUT")) {
        return res.status(500).json({
          error: "Unable to generate GEO snapshot at this time.",
        });
      }
    }

    return res.status(500).json({
      error: "Unable to generate GEO snapshot at this time.",
    });
  }
}

