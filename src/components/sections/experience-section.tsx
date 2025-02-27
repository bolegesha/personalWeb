'use client';

import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils/utils';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';

type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 'job1',
    title: 'Software Engineer',
    company: 'TOO ABT-Etrans',
    location: 'Алматы',
    period: 'Октябрь 2023 - Present',
    description: [
      'Разработал ERP систему для логистической компании с нуля, включая архитектуру и интерфейс',
      'Внедрил современные практики разработки и CI/CD процессы для повышения качества кода', 
      'Создал масштабируемую архитектуру, позволяющую легко добавлять новые модули и функциональность',
      'Оптимизировал производительность системы для работы с большими объемами данных'
    ],
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Shadcn UI', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'job2',
    title: 'Software Engineer',
    company: 'FMA RK',
    location: 'Астана',
    period: 'Декабрь 2022 - Июль 2023',
    description: [
      'Разработал архитектуру клиентской части системы OSINT, обеспечив масштабируемость и гибкость приложения',
      'Создал интерактивные панели и графики для визуализации и анализа больших объемов данных',
      'Руководил процессом обучения стажеров, внедряя современные подходы к разработке интерфейсов',
      'Оптимизировал производительность приложения, сократив время загрузки на 40%'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'D3.js', 'Ant Design', 'SCSS'],
  },
  {
    id: 'job3',
    title: 'Software Engineer',
    company: '21Tech',
    location: 'Алматы',
    period: 'Июнь 2022 - Октябрь 2022',
    description: [
      'Участвовал в разработке корпоративного веб-приложения в команде из 5 разработчиков',
      'Реализовал несколько ключевых компонентов пользовательского интерфейса с использованием React и Redux',
      'Активно участвовал в код-ревью, что способствовало повышению качества кода и обмену знаниями в команде',
      'Оптимизировал существующие компоненты, улучшив пользовательский опыт и производительность'
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'CSS', 'HTML'],
  },
  {
    id: 'job4',
    title: 'Software Engineer Intern',
    company: '21Tech',
    location: 'Астана',
    period: 'Март 2022 - Май 2022',
    description: [
      'Разработал и внедрил динамические компоненты для корпоративного веб-сайта',
      'Освоил основы фронтенд-разработки с использованием React и современных JavaScript-фреймворков',
      'Участвовал в еженедельных встречах команды и демонстрациях проделанной работы'
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
];

export function ExperienceSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Опыт работы</h2>
          <p className="mt-4 text-muted-foreground">
            Мой профессиональный путь и компании, с которыми я имел удовольствие работать.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 space-y-12"
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={item}
              className="relative rounded-2xl border border-border/50 bg-background/50 p-6 shadow-sm transition-all hover:shadow-md backdrop-blur-sm md:p-8"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="mt-1 font-medium text-primary">{experience.company}</p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-muted-foreground">
                    <MapPinIcon className="mr-1 h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-2">
                    {experience.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <BriefcaseIcon className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 