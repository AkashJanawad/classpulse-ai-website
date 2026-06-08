import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { featureCards, workflow } from '../data/site.js';
import useSeo from '../hooks/useSeo.js';

export default function Features() {
  useSeo({
    title: 'ClassPulse AI Features | Classroom Pulse, Attendance, and AI Insights',
    description: 'Explore ClassPulse AI features for classroom engagement, attendance intelligence, early risk signals, and parent-ready updates.',
    path: '/features',
  });

  return (
    <>
      <PageHero
        eyebrow="Features"
        title="A focused platform for classroom visibility and timely action."
        text="Start with the core school signals, then expand into AI-supported workflows as your team is ready."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                  <Icon size={28} className="text-teal-700 dark:text-teal-300" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-black text-ink dark:text-white">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-white/68">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-white/[0.03] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operational flow"
            title="Designed for everyday school routines."
            text="No complicated deployment layer is required. The website and Express server can be hosted through a small Linux or Termux environment."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {workflow.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-xl bg-paper p-6 dark:bg-night">
                  <Icon size={26} className="text-coral" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-ink dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-white/68">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
