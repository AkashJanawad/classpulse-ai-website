import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactDetails, navItems } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-surface-accent px-4 py-16 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 dark:via-primary/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-10 w-10 rounded-lg object-contain" />
            <span className="text-xl font-black text-text-main">ClassPulse AI</span>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-text-muted">
            Privacy-aware classroom intelligence for schools that want earlier signals, clearer decisions, and
            practical AI support.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted/70 mb-6">Company</h2>
          <div className="grid gap-4">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-semibold text-text-muted transition-colors hover:text-text-main">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted/70 mb-6">Contact</h2>
          <div className="grid gap-4 text-sm text-text-muted">
            <p className="flex items-center gap-3">
              <Mail size={16} className="text-text-muted/70" aria-hidden="true" /> {contactDetails.email}
            </p>
            <p className="flex items-center gap-3">
              <Phone size={16} className="text-text-muted/70" aria-hidden="true" /> {contactDetails.phone}
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-text-muted/70" aria-hidden="true" /> {contactDetails.address}
            </p>
            <p className="flex items-center gap-3">
              <ShieldCheck size={16} className="text-text-muted/70" aria-hidden="true" /> Privacy-first roadmap
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-6 border-t border-border-subtle pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} ClassPulse AI. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="font-medium transition-colors hover:text-text-main">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="font-medium transition-colors hover:text-text-main">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
