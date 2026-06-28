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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <Icon size={28} className="text-primary" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-black text-white">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/64">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
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
                <article key={item.title} className="rounded-2xl border border-white/10 bg-[#080b16]/80 p-6 shadow-violet">
                  <Icon size={26} className="text-tertiary" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
