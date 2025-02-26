'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/utils';

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'Redux', icon: '🔄' },
  
  // Backend
  { name: 'Node.js', icon: '🟢' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'tRPC', icon: '🔌' },
  
  // Tools
  { name: 'Git', icon: '📝' },
  { name: 'Jest', icon: '🃏' },
  { name: 'Webpack', icon: '📦' },
  { name: 'ORM', icon: '📦' },
  
  // Languages
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗃️' },
];

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Мои навыки</h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
              Здесь представлены технологии и инструменты, с которыми я работаю для создания современных веб-приложений.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className={cn(
                'flex flex-col items-center justify-center rounded-lg border border-border/30 p-4 transition-all hover:border-primary/30 hover:shadow-md dark:hover:border-primary/40 backdrop-blur-sm bg-background/50',
                'dark:bg-card/30'
              )}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
            >
              <span className="text-2xl mb-2">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background decoration - Apple-style gradient blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
} 