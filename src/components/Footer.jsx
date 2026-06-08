import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactDetails, navItems } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white px-4 py-12 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-11 w-11 rounded-lg object-contain" />
            <span className="text-lg font-black text-ink dark:text-white">ClassPulse AI</span>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink/68 dark:text-white/68">
            Privacy-aware classroom intelligence for schools that want earlier signals, clearer decisions, and
            practical AI support.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink/60 dark:text-white/55">Company</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-semibold text-ink/76 hover:text-teal-700 dark:text-white/72 dark:hover:text-teal-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ink/60 dark:text-white/55">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-ink/72 dark:text-white/70">
            <p className="flex items-center gap-2">
              <Mail size={16} aria-hidden="true" /> {contactDetails.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} aria-hidden="true" /> {contactDetails.phone}
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> {contactDetails.address}
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck size={16} aria-hidden="true" /> Privacy-first product roadmap
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-ink/10 pt-6 text-sm text-ink/60 dark:border-white/10 dark:text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ClassPulse AI. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-teal-700 dark:hover:text-teal-200">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-teal-700 dark:hover:text-teal-200">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
