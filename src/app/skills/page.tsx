import { Metadata } from 'next';
import { SkillsSection } from '@/components/sections/skills-section';

export const metadata: Metadata = {
  title: 'Навыки | Личный портфолио',
  description: 'Мои технические навыки, инструменты и технологии, с которыми я работаю.',
};

export default function SkillsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mt-12">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
} 