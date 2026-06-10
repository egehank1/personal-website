import { HomeScrollReset } from "@/components/layout/HomeScrollReset";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Education } from "@/components/sections/Education";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { TechStackGrid } from "@/components/sections/TechStackGrid";

export default function Home() {
  return (
    <>
      <HomeScrollReset />
      <Hero />
      <About />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Education />
      <Credentials />
      <TechStackGrid />
      <Contact />
    </>
  );
}
