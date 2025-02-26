import { HeroSection } from '@/components/sections/hero-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
  