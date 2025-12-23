import { ReactNode } from "react";
import { WebsitesHeader } from "./WebsitesHeader";
import { WebsitesFooter } from "./WebsitesFooter";

interface WebsitesLayoutProps {
  children: ReactNode;
}

export const WebsitesLayout = ({ children }: WebsitesLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <WebsitesHeader />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <WebsitesFooter />
    </div>
  );
};
