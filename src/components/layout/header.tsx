'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils/utils';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { KnightLogo } from '@/components/ui/knight-logo';

const navigationItems = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'Обо мне' },
  { href: '/experience', label: 'Опыт и проекты' },
  { href: '/skills', label: 'Навыки' },
  { href: '/contact', label: 'Контакты' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled ? "border-b border-border/40 bg-background/80" : "bg-background/0"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <KnightLogo />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenuPrimitive.Root className="hidden md:block">
          <NavigationMenuPrimitive.List className="flex flex-row gap-6 rounded-lg">
            {navigationItems.map((item) => (
              <NavigationMenuPrimitive.Item key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'group inline-flex h-9 w-max items-center justify-center px-2 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground/70'
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </NavigationMenuPrimitive.Item>
            ))}
          </NavigationMenuPrimitive.List>
        </NavigationMenuPrimitive.Root>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
} 