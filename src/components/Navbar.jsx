import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/site.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-teal-700 text-white dark:bg-teal-400 dark:text-night'
        : 'text-ink/76 hover:bg-ink/5 hover:text-ink dark:text-white/76 dark:hover:bg-white/10 dark:hover:text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/88 backdrop-blur-xl dark:border-white/10 dark:bg-night/86">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="h-11 w-11 rounded-lg object-contain" />
          <span className="text-lg font-black tracking-normal text-ink dark:text-white">ClassPulse AI</span>
        </NavLink>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink/10 bg-white/80 text-ink shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-white"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-ink/10 bg-paper px-4 py-4 shadow-soft dark:border-white/10 dark:bg-night lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
