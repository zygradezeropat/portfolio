import { AboutSection } from "./components/portfolio/AboutSection";
import { BackgroundEffects } from "./components/portfolio/BackgroundEffects";
import { CodePanel } from "./components/portfolio/CodePanel";
import { ContactSection } from "./components/portfolio/ContactSection";
import { ExpertiseSection } from "./components/portfolio/ExpertiseSection";
import { HeaderNav } from "./components/portfolio/HeaderNav";
import { HeroSection } from "./components/portfolio/HeroSection";
import { ProjectsSection } from "./components/portfolio/ProjectsSection";
import { ScrollIndicator } from "./components/portfolio/ScrollIndicator";
import { WorkSection } from "./components/portfolio/WorkSection";
import { navItems } from "./data/portfolioData";

export default function PortfolioLanding() {
  return (
    <div className="relative min-h-screen bg-[#090f1f] text-zinc-200 antialiased">
      <BackgroundEffects />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px]">
        <div className="relative flex w-full flex-col px-6 py-7 md:px-10">
          <HeaderNav items={navItems} />

          <main className="flex flex-1 flex-col gap-14">
            <section className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">
              <HeroSection />
              <CodePanel />
            </section>
            <AboutSection />
            <ExpertiseSection />
            <WorkSection />
            <ProjectsSection />
            <ContactSection />
          </main>

          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
}
