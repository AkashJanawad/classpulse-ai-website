import { Cloud, Mail, MapPin, Phone, Server } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import PageHero from '../components/PageHero.jsx';
import { contactDetails } from '../data/site.js';
import useSeo from '../hooks/useSeo.js';

export default function Contact() {
  useSeo({
    title: 'Contact ClassPulse AI | Start a School Pilot',
    description: 'Contact ClassPulse AI to discuss school pilots, product demos, and deployment partnerships.',
    path: '/contact',
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what kind of school workflow you want to improve."
        text="Send a short note about your school, pilot idea, or deployment question. The backend includes a production-ready contact endpoint that can later be connected to email or a CRM."
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-4">
            {[
              { icon: Mail, title: 'Email', text: contactDetails.email },
              { icon: Phone, title: 'Phone', text: contactDetails.phone },
              { icon: MapPin, title: 'Address', text: contactDetails.address },
              { icon: Server, title: 'Lean hosting', text: 'Linux and Termux deployment without Docker.' },
              { icon: Cloud, title: 'Cloudflare ready', text: 'Designed to sit behind a secure Cloudflare Tunnel.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40">
                  <Icon size={24} className="text-primary" aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-black text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/64">{item.text}</p>
                </div>
              );
            })}
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
