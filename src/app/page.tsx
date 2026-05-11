import { About } from "@/components/sections/About";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { TechStackGrid } from "@/components/sections/TechStackGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <ExperienceTimeline />
      <TechStackGrid />
      <BlogPreview />
      <Contact />
    </>
  );
}
