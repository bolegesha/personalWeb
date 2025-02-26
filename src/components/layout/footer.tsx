import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/20 bg-background/80 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:flex md:justify-between">
          <div>
            <h3 className="text-base font-medium mb-4">Ссылки</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Главная
              </Link>
              <Link href="/about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Обо мне
              </Link>
              <Link href="/experience" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Опыт работы
              </Link>
              <Link href="/skills" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Навыки
              </Link>
              <Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Связаться</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
} 