'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, MapPin, CheckCircle } from 'lucide-react';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  company: string;
  location: string;
  period?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 'project1',
    title: 'ERP система для логистической компании',
    company: 'TOO ABT-Etrans',
    location: 'Алматы',
    period: 'Октябрь 2024 - Present',
    description: 'Система для управления процессами и данными в логистической компании, включая управление заказами, складами и транспортом.',
    achievements: [
      'Разработал динамические компоненты для различных сервисных модулей',
      'Участвовал в ревью кода для повышения качества и поддерживаемости', 
      'Разработал как клиентскую так и серверную часть системы',
    ],
    technologies: ['NextJs', 'TypeScript', 'Redux', 'Tailwind CSS', 'ShadcnUI', 'NodeJs', 'Potgres'],
    image: '/images/project2.jpg',
  
  },
  {
    id: 'project2',
    title: 'OSINT',
    company: 'FMA RK',
    location: 'Astana',
    period: 'Декабрь 2023 - Июль 2024',
    description: 'Система для сбора и анализа открытых источников, включая интерактивные панели и инструменты визуализации данных.',
    achievements: [
      'Разработал архитектуру клиентской части, обеспечив масштабируемость и гибкость',
      'Создал интерактивные панели и графики для анализа больших объемов информации',
      'Руководил процессом обучения стажеров, обучая современным подходам к разработке интерфейсов'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Ant Design', 'SCSS'],
    image: '/images/project1.jpg',
  },
  {
    id: 'project3',
    title: 'Сайт для компании по доставке воды',
    company: '21Tech',
    location: 'Алматы',
    period: 'Март 2023 - Октябрь 2023',
    description: 'Сайт для компании, демонстрирующий услуги, портфолио и контактную информацию.',
    achievements: [
      'Создал динамические компоненты для интерфейса сайта',
      'Реализовал адаптивный дизайн для мобильных и десктопных устройств',
      'Освоил и применил основы React в реальном проекте'
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    image: '/images/project3.jpg',
  },
  {
    id: 'project4',
    title: 'Калькулятор друзей',
    company: 'Petproject',
    location: 'Алматы',
    description: 'Решил главную проблему в больших и шумных посиделках - как поделить счет',
    achievements: [
      'Создал простой и удобный интерфейс для расчета счета для телефона',
      'На данный момент ведется разработка мобильной версии а также интеграции с AI'
    ],
    technologies: ['NextJs', 'TypeScript', 'Redux', 'Tailwind CSS', 'ShadcnUI'],
    image: '/images/project4.jpg',
    liveUrl: 'https://dima-ne-nuzhen.vercel.app/',
  },
];

export function ProjectsSection() {
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Мои проекты</h2>
          <p className="mt-4 text-muted-foreground">
            Ключевые проекты, над которыми я работал в различных компаниях
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:shadow-md"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-xl">🖼️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm font-medium text-primary">{project.company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span className="mr-3">{project.period}</span>
                  <MapPin className="mr-1 h-3 w-3" />
                  <span>{project.location}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <CheckCircle className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-5">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" variant="default" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 