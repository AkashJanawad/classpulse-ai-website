import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactDetails, navItems } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030407] px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-11 w-11 rounded-lg object-contain" />
            <span className="text-lg font-black text-white glow-text">ClassPulse AI</span>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">
            Privacy-aware classroom intelligence for schools that want earlier signals, clearer decisions, and
            practical AI support.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Company</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-semibold text-white/68 transition hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/68">
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

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} ClassPulse AI. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="transition hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="transition hover:text-primary">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
