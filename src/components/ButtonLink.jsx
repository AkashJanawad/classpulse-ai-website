import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'border border-primary/50 bg-primary/14 text-white shadow-violet hover:border-secondary/70 hover:bg-primary/22 focus-visible:outline-primary',
  secondary:
    'border border-white/14 bg-white/7 text-white hover:border-tertiary/60 hover:bg-white/12 focus-visible:outline-tertiary',
};

export default function ButtonLink({ to, children, variant = 'primary', showIcon = true }) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font800 font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]}`}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  );
}
