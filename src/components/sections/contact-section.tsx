'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // In a real application, you would send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Связаться со мной</h2>
          <p className="mt-4 text-muted-foreground">
            У вас есть вопрос или вы хотите работать вместе? Не стесняйтесь обращаться!
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Контактная информация</h3>
            <p className="text-muted-foreground">
              Я всегда открыт к новым возможностям и сотрудничеством.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:aldiyar-bolegenov@mail.ru"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    aldiyar-bolegenov@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <a
                    href="tel:+77011011809"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +7 (701) 101-18-09
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Местоположение</h4>
                  <p className="text-muted-foreground">Алматы, Казахстан</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Сообщение отправлено!</h3>
                <p className="mt-2 text-muted-foreground">
                  Спасибо за ваше обращение. Я отвечу вам как можно скорее.
                </p>
                <Button
                  className="mt-6 transition-transform hover:scale-105"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Отправить другое сообщение
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-full border border-input bg-background/70 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-full border border-input bg-background/70 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Тема
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-full border border-input bg-background/70 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="По какому вопросу?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-xl border border-input bg-background/70 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button 
                  type="submit" 
                  className="w-full transition-transform hover:scale-105" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 