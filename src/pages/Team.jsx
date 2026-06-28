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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Company owners"
            title="A founding group with product, technology, design, operations, and growth focus."
            text="These profiles are written as starter copy so you can later replace the details with exact biographies, designations, and achievements."
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {founders.map((person) => (
              <article key={person.name} className="glass-panel group relative overflow-hidden rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-primary/35 via-secondary/20 to-tertiary/20" />
                <div className="relative mx-auto h-32 w-32 rounded-full border border-primary/35 bg-[#05070d] p-1 shadow-violet">
                  <img src={person.image} alt={`${person.name}, ${person.role}`} className="h-full w-full rounded-full object-cover" loading="lazy" />
                </div>
                <h2 className="mt-5 text-lg font-black leading-tight text-white">{person.name}</h2>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-primary">{person.role}</p>
                <p className="mt-4 text-sm leading-7 text-white/64">{person.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/12 px-4 py-2 text-sm font-bold text-primary">
              <Sparkles size={16} aria-hidden="true" />
              About ClassPulse AI
            </p>
            <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
              We are building a serious school-tech product from a lean, ambitious base.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-white/70">
              <p>
                ClassPulse AI is a startup focused on helping schools understand classroom engagement, attendance
                patterns, student support needs, and operational signals through a simple AI-powered platform.
              </p>
              <p>
                Our goal is to make technology feel useful inside the daily rhythm of a school: fast to deploy, easy to
                understand, and respectful of the people who use it.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-black text-white">What makes this team different</h3>
            <div className="mt-5 grid gap-4">
              {companyStrengths.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/7 p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-tertiary" size={20} aria-hidden="true" />
                  <p className="text-sm font-semibold leading-7 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Operating structure" title="Built with clear roles around product, education, and deployment." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} className="glass-panel rounded-2xl p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/12 text-2xl font-black text-primary">
                  {index + 1}
                </div>
                <h2 className="mt-6 text-xl font-black text-white">{member.name}</h2>
                <p className="mt-2 text-sm font-bold text-primary">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-white/64">{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
