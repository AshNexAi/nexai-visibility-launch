import logoIcon from "@/assets/logo-icon.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={logoIcon} 
              alt="NexAI SEO" 
              className="h-12 w-12 object-contain rounded-lg"
              style={{
                mixBlendMode: 'normal',
              }}
            />
          </div>
          <span className="text-lg font-semibold gradient-text hidden sm:inline">
            NexAI SEO
          </span>
        </div>
        <div className="h-6 w-px bg-border/30" />
      </div>
    </header>
  );
};
