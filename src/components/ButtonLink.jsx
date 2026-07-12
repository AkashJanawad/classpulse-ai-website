import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'border border-primary/50 bg-primary/20 text-text-main shadow-violet hover:border-secondary/70 hover:bg-primary/30 focus-visible:outline-primary',
  secondary:
    'border border-border-strong bg-surface-elevated text-text-main hover:border-text-muted hover:bg-surface-accent focus-visible:outline-text-muted shadow-sm hover:shadow-md',
};

export default function ButtonLink({ to, children, variant = 'primary', showIcon = true }) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-8 text-sm font-bold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]}`}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  );
}
