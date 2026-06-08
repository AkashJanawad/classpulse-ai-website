import PageHero from '../components/PageHero.jsx';
import { team } from '../data/site.js';
import useSeo from '../hooks/useSeo.js';

export default function Team() {
  useSeo({
    title: 'ClassPulse AI Team | Builders for Schools and AI Infrastructure',
    description: 'Meet the ClassPulse AI team and collaborators building practical school intelligence.',
    path: '/team',
  });

  return (
    <>
      <PageHero
        eyebrow="Team"
        title="A lean team building with educators, not around them."
        text="ClassPulse AI is early-stage, so the team page is intentionally honest: product builders, school advisors, and technical partners working toward pilot-ready impact."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {team.map((member, index) => (
            <article key={member.name} className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700 text-2xl font-black text-white dark:bg-teal-400 dark:text-night">
                {index + 1}
              </div>
              <h2 className="mt-6 text-xl font-black text-ink dark:text-white">{member.name}</h2>
              <p className="mt-2 text-sm font-bold text-teal-700 dark:text-teal-300">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-ink/68 dark:text-white/68">{member.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
