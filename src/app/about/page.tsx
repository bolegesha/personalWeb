import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Обо мне | Личный портфолио',
  description: 'Узнайте больше о моем прошлом, навыках и опыте.',
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Обо мне</h1>
        
        <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-base leading-7">
              <p>
                Привет! Я <strong>Алдияр</strong>, амбициозный и целеустремленный веб-разработчик, который создает красивые, функциональные и удобные веб-сайты и приложения.
              </p>
              
              <p>
                С более чем 2-летним опытом в разработке, я имел возможность работать над широким спектром проектов, от малых бизнес-сайтов до сложных веб-приложений.
                Я специализируюсь на разработке фронтенда, используя современные технологии, такие как React, Next.js,
                и TypeScript, но также начинаю работать с бэкенд-технологиями, а также мобильными приложениями.
              </p>
              
              <p>
                Мой путь в разработке веб-сайтов начался, когда я учился в университете, где я изучал специальность "Кибербезопасность".
                С тех пор я продолжаю изучать и улучшать свои навыки, чтобы оставаться в курсе последних технологий и лучших практик в отрасли.
              </p>
              

              <h2 className="text-2xl font-bold tracking-tight">Мой подход</h2>
              
              <p>
                Я считаю, что создание веб-сайтов и приложений не только должно быть красивым,
                но и функциональным, доступным и удобным для пользователей. Я внимательно отношусь к деталям
                и всегда стремлюсь предоставить высококачественную работу, которая превышает ожидания клиента.
              </p>
              
              <p>
                Мой процесс разработки включает в себя понимание потребностей клиента, планирование проекта,
                проектирование интерфейса, реализацию функциональности, тестирование и, наконец, развертывание проекта.
                Я считаю, что важным является открытое общение на протяжении всего процесса разработки, чтобы гарантировать,
                что окончательный продукт соответствует требованиям клиента.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Связаться со мной <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Скачать резюме
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="sticky top-24 space-y-6">
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-square w-full bg-muted flex items-center justify-center">
                  <Image src="/images/pers_phot0.jpeg" alt="Алдияр" width={300} height={300} className="object-cover" />
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <h3 className="font-medium">Quick Facts</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>📍 Живу в Алматы, Казахстан</li>
                  <li>🎓 Бакалавр по специальности "Cybersecurity"</li>
                  <li>💼 2 года коммерческого опыта работы</li>
                  <li>🌐 Разговариваю на английском, русском и казахском</li>
                  <li>🚀 Открыт как к офисной, так и к удаленной работе</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 