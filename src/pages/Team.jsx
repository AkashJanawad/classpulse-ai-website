import { CheckCircle2, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { companyStrengths, founders, team } from '../data/site.js';
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
        title="The owners behind ClassPulse AI."
        text="ClassPulse AI is built by a focused founding team working to bring practical, privacy-aware AI into school workflows."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Company owners"
            title="A founding group with product, technology, design, operations, and growth focus."
            text="These profiles are written as starter copy so you can later replace the details with exact biographies, designations, and achievements."
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {founders.map((person) => (
              <article
                key={person.name}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-teal-700 via-iris to-coral opacity-90" />
                <div className="relative mx-auto h-32 w-32 rounded-full border-4 border-white bg-white p-1 shadow-soft dark:border-night dark:bg-night">
                  <img
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    className="h-full w-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h2 className="mt-5 text-lg font-black leading-tight text-ink dark:text-white">{person.name}</h2>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-ink/68 dark:text-white/68">{person.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-white/[0.03] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-bold text-white dark:bg-teal-300 dark:text-night">
              <Sparkles size={16} aria-hidden="true" />
              About ClassPulse AI
            </p>
            <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-ink dark:text-white sm:text-4xl">
              We are building a serious school-tech product from a lean, ambitious base.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-ink/72 dark:text-white/72">
              <p>
                ClassPulse AI is a startup focused on helping schools understand classroom engagement, attendance
                patterns, student support needs, and operational signals through a simple AI-powered platform.
              </p>
              <p>
                Our goal is to make technology feel useful inside the daily rhythm of a school: fast to deploy, easy to
                understand, and respectful of the people who use it. This short description is placeholder copy and can
                be updated later with the exact founder story, vision, and company registration details.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper p-6 dark:border-white/10 dark:bg-night">
            <h3 className="text-xl font-black text-ink dark:text-white">What makes this team different</h3>
            <div className="mt-5 grid gap-4">
              {companyStrengths.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-white p-4 dark:bg-white/[0.06]">
                  <CheckCircle2 className="mt-1 shrink-0 text-teal-700 dark:text-teal-300" size={20} aria-hidden="true" />
                  <p className="text-sm font-semibold leading-7 text-ink/72 dark:text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operating structure"
            title="Built with clear roles around product, education, and deployment."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
        </div>
      </section>
    </>
  );
}
