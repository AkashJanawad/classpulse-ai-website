import ButtonLink from '../components/ButtonLink.jsx';
import useSeo from '../hooks/useSeo.js';

export default function NotFound() {
  useSeo({
    title: 'Page Not Found | ClassPulse AI',
    description: 'The page you requested could not be found.',
    path: '/404',
  });

  return (
    <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">404</p>
        <h1 className="mt-4 text-4xl font-black text-ink dark:text-white sm:text-5xl">This page is not available.</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-ink/70 dark:text-white/70">
          The ClassPulse AI page you tried to open may have moved or does not exist yet.
        </p>
        <div className="mt-8">
          <ButtonLink to="/">Go home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
