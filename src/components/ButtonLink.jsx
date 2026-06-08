import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-teal-700 text-white shadow-glow hover:bg-teal-600 focus-visible:outline-teal-500 dark:bg-teal-500 dark:text-night dark:hover:bg-teal-100',
  secondary:
    'border border-ink/15 bg-white/80 text-ink hover:border-teal-600 hover:text-teal-700 focus-visible:outline-teal-600 dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-100',
};

export default function ButtonLink({ to, children, variant = 'primary', showIcon = true }) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font800 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]}`}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  );
}
