import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/effects/PageLoader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 pt-28 sm:pt-32">{children}</main>
        <Footer />
      </div>
    </>
  );
}
