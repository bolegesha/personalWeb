'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-bold tracking-tight">
            <span className="block text-2xl md:text-3xl text-foreground/80 mb-3">Привет, меня зовут</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl">Алдияр</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Я разработчик, который создает современные веб-приложения.
            Я создаю элегантные решения, фокусируясь на производительности и легкости использования.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="transition-transform hover:scale-105 px-8">
              <Link href="/contact">
                Связаться со мной <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="transition-transform hover:scale-105 px-8">
              <Link href="/projects">Мои проекты</Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8">
            <Link
              href="https://github.com/boegesha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/aldiyar-bolegenov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:aldiyar-bolegenov@mail.ru"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration - Apple-style gradient blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
} 