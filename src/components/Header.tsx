import logo from "@/assets/company-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="NexAI SEO" 
            className="h-10 w-auto object-contain"
          />
        </div>
        <div className="h-6 w-px bg-border/30" />
      </div>
    </header>
  );
};
