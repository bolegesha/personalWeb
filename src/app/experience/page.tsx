import { Metadata } from 'next';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';

export const metadata: Metadata = {
  title: 'Опыт работы и проекты | Личный портфолио',
  description: 'Мой профессиональный опыт и проекты, над которыми я работал.',
};

export default function ExperiencePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mt-12">
          <ExperienceSection />
          <div className="mt-16">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </div>
  );
} 