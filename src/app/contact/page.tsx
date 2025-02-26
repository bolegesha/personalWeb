import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Contact Me | Personal Portfolio',
  description: 'Get in touch with me for work opportunities, collaborations, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mt-12">
          <ContactSection />
        </div>
      </div>
    </div>
  );
} 