import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { values } from '../data/site.js';
import useSeo from '../hooks/useSeo.js';

export default function About() {
  useSeo({
    title: 'About ClassPulse AI | Privacy-Aware School Intelligence',
    description: 'Learn why ClassPulse AI is building lightweight, privacy-aware classroom intelligence for schools.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We are building AI that makes school decisions clearer, earlier, and more humane."
        text="ClassPulse AI exists for teams that want better classroom visibility without making teachers carry another heavy system."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Our mission"
            title="Make classroom signals understandable enough to act on."
            text="Schools already collect fragments of meaningful information every day. Our work is to connect those fragments into simple, respectful insight loops."
          />
          <div className="grid gap-5 text-base leading-8 text-ink/72 dark:text-white/72">
            <p>
              ClassPulse AI is designed for real school constraints: limited time, mixed technical resources, and the
              need to protect students while still moving quickly when support is needed.
            </p>
            <p>
              The first product focus is a classroom pulse dashboard that helps administrators and teachers understand
              engagement, attendance, and follow-up patterns. The long-term vision is a trusted operating layer for
              student support, parent communication, and school improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-white/[0.03] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Principles" title="The product rules we keep close." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-xl border border-ink/10 bg-paper p-6 dark:border-white/10 dark:bg-night">
                  <Icon size={26} className="text-teal-700 dark:text-teal-300" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-ink dark:text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-white/68">{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
