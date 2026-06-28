import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/site.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-primary/18 text-white ring-1 ring-primary/40'
        : 'text-white/70 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070d]/78 shadow-[0_12px_60px_rgba(0,0,0,.28)] backdrop-blur-2xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-night"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="h-11 w-11 rounded-lg object-contain" />
          <span className="text-lg font-black tracking-normal text-white glow-text">ClassPulse AI</span>
        </NavLink>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/50 bg-primary/16 px-5 text-sm font-bold text-white shadow-violet transition hover:-translate-y-0.5 hover:border-secondary/70 hover:bg-primary/24"
          >
            Start with us
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/50 bg-primary/16 px-4 text-sm font-bold text-white shadow-violet transition hover:border-secondary/70 hover:bg-primary/24"
            onClick={() => setOpen(false)}
          >
            Start with us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white shadow-sm backdrop-blur-xl"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#05070d]/96 px-4 py-4 shadow-soft backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-white/70">
              <span>Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
