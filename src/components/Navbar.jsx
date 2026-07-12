import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'Platform', href: 'platform' },
  { label: 'Features', href: 'features' },
  { label: 'Technology', href: 'technology' },
  { label: 'About', href: 'about' },
  { label: 'Roadmap', href: 'roadmap' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Intersection logic for active section
      const sections = navItems.map((item) => document.getElementById(item.href)).filter(Boolean);
      let current = '';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = (href) =>
    `text-sm transition-colors duration-200 ${
      activeSection === href
        ? 'text-text-main font-semibold'
        : 'text-text-muted hover:text-text-main'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-glass backdrop-blur-xl border-b border-border-subtle shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-text-main focus:text-text-inverse focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-3 group">
          <img src="/logo.png" alt="" className="h-8 w-8 rounded object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="text-base font-bold tracking-tight text-text-main">ClassPulse AI</span>
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={`#${item.href}`} onClick={(e) => handleNavClick(e, item.href)} className={navClass(item.href)}>
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="inline-flex h-10 items-center justify-center rounded-full bg-text-main px-6 text-sm font-semibold text-text-inverse transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
          >
            Start with us
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-strong text-text-main bg-surface-elevated hover:bg-surface-accent transition-colors"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden bg-surface-elevated border-b border-border-subtle shadow-xl ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="mx-auto flex flex-col gap-2 px-4 py-6 sm:px-6">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={`#${item.href}`} 
              onClick={(e) => handleNavClick(e, item.href)} 
              className={`block px-4 py-3 rounded-lg text-base transition-colors ${
                activeSection === item.href
                  ? 'bg-surface-accent text-text-main font-semibold border border-border-subtle'
                  : 'text-text-muted hover:bg-surface-accent hover:text-text-main'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mt-6 flex h-12 items-center justify-center rounded-lg bg-text-main px-5 text-base font-semibold text-text-inverse transition-colors shadow-md"
          >
            Start with us
          </a>
        </div>
      </div>
    </header>
  );
}
