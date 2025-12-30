import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Generic service/profession terms that indicate a category input
const GENERIC_CATEGORY_TERMS = [
  "dentist",
  "doctor",
  "lawyer",
  "attorney",
  "restaurant",
  "cafe",
  "café",
  "school",
  "hospital",
  "clinic",
  "salon",
  "barber",
  "plumber",
  "electrician",
  "mechanic",
  "gym",
  "fitness",
  "yoga",
  "coach",
  "tutor",
  "teacher",
  "accountant",
  "therapist",
  "counselor",
  "architect",
  "engineer",
  "contractor",
  "chef",
  "photographer",
  "designer",
];

// Brand/Product questions (AI/SEO focused)
const BRAND_QUESTIONS = [
  "Which companies are known for helping brands with visibility in AI-generated answers?",
  "What brands are commonly associated with generative engine optimization?",
  "Which companies work on AI search visibility or GEO?",
  "What are the leading companies in AI-powered SEO and search optimization?",
];

// Category/Profession questions (general discovery focused)
const CATEGORY_QUESTIONS = [
  "When people look for a {category}, what services or platforms are commonly mentioned?",
  "What are common ways people find {category} services today?",
  "Which companies or platforms are associated with {category} service discovery?",
  "How do people typically search for {category} online?",
];

/**
 * Classifies input as generic category or brand/product using simple heuristic
 */
function isGenericCategory(input: string): boolean {
  const lowerInput = input.toLowerCase().trim();
  
  // Check if input matches or contains any generic category term
  return GENERIC_CATEGORY_TERMS.some((term) => {
    // Exact match or contains the term as a word
    return lowerInput === term || lowerInput.includes(term);
  });
}

/**
 * Gets the appropriate question set based on input type
 */
function getQuestionsForInput(input: string): string[] {
  if (isGenericCategory(input)) {
    // Use category questions with dynamic replacement
    const category = input.toLowerCase();
    return CATEGORY_QUESTIONS.map((q) => q.replace("{category}", category));
  } else {
    // Use brand questions
    return BRAND_QUESTIONS;
  }
}

/**
 * Counts how many times a brand name appears in text (case-insensitive)
 */
function countBrandMentions(text: string, brand: string): number {
  const lowerText = text.toLowerCase();
  const lowerBrand = brand.toLowerCase();
  // Simple word boundary matching to avoid partial matches
  const regex = new RegExp(`\\b${lowerBrand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
  const matches = lowerText.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Generates GEO insight based on input mention count
 * Handles both brand/product and generic category inputs
 */
function generateGEOInsight(
  input: string,
  mentionCount: number,
  isCategory: boolean
): {
  brandMentioned: boolean;
  contextStrength: "Weak" | "Moderate" | "Strong";
  insight: string;
  suggestedFocus: string;
} {
  if (mentionCount === 0) {
    if (isCategory) {
      return {
        brandMentioned: false,
        contextStrength: "Weak",
        insight:
          "AI systems discuss the space but do not associate this term with a specific brand or entity.",
        suggestedFocus:
          "Establish a clearer, distinct entity or brand presence rather than relying on generic category terms.",
      };
    } else {
      return {
        brandMentioned: false,
        contextStrength: "Weak",
        insight: "AI systems discuss the category but do not associate your brand with it.",
        suggestedFocus:
          "Strengthen brand–category context across authoritative sources.",
      };
    }
  }

  if (mentionCount === 1) {
    return {
      brandMentioned: true,
      contextStrength: "Moderate",
      insight: "The input appears in AI answers but is not a primary reference.",
      suggestedFocus:
        "Increase clarity and consistency of positioning across authoritative sources.",
    };
  }

  // More than once
  return {
    brandMentioned: true,
    contextStrength: "Strong",
    insight: "AI systems strongly associate this entity with the space.",
    suggestedFocus: "Maintain and reinforce existing authority signals.",
  };
}

// Vercel serverless function entrypoint
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
  const isCategory = isGenericCategory(input);
  
  console.log("📥 Processing GEO snapshot for input:", input);
  console.log("🏷️  Input type:", isCategory ? "Generic Category" : "Brand/Product");
  if (website) {
    console.log("🌐 Website provided:", website);
  }

  // Check if OpenAI API key is configured
  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ OPENAI_API_KEY is not configured!");
    return res.status(500).json({
      error: "Unable to generate GEO snapshot at this time.",
    });
  }

  try {
    // Get appropriate questions based on input type
    const questions = getQuestionsForInput(input);
    console.log("🤖 Asking OpenAI questions (type:", isCategory ? "Category" : "Brand", ")...");
    console.log("📋 Questions:", questions);

    // Ask all questions in parallel for efficiency
    const questionPromises = questions.map((question) =>
      openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      })
    );

    const responses = await Promise.all(questionPromises);
    console.log("✅ Received", responses.length, "AI responses");

    // Combine all AI responses into one text
    const combinedText = responses
      .map((response) => response.choices[0]?.message?.content || "")
      .join("\n\n");

    console.log("📊 Combined response length:", combinedText.length, "characters");

    // Count input mentions in the combined text
    const mentionCount = countBrandMentions(combinedText, input);
    console.log("🔢 Input mentions found:", mentionCount);

    // Generate GEO insight based on mention count and input type
    const result = generateGEOInsight(input, mentionCount, isCategory);

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

