import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink.jsx';
import CinematicHero from '../components/CinematicHero.jsx';
import ProductVisual from '../components/ProductVisual.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { contactDetails, featureCards, founders, metrics, values, workflow } from '../data/site.js';
import useSeo from '../hooks/useSeo.js';

export default function Home() {
  useSeo({
    title: 'ClassPulse AI | Classroom Intelligence for Modern Schools',
    description: 'ClassPulse AI turns attendance, engagement, and classroom notes into privacy-aware school insights.',
    path: '/',
  });

  return (
    <>
      <CinematicHero />

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Classroom intelligence"
              title="ClassPulse AI transforms how classrooms understand students."
              text="The platform connects school signals into a live operating view: attention patterns, attendance trends, teacher notes, and AI summaries that stay grounded in human review."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass-panel rounded-xl p-4">
                  <p className="text-2xl font-black text-white">{metric.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">{metric.label}</p>
                  <p className="mt-2 text-sm text-white/58">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <ProductVisual />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What it does"
            title="Intelligence at every level of the school day."
            text="Comprehensive AI tools for the modern classroom, presented as practical workflows schools can pilot without heavy infrastructure."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className={`glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/12 text-primary">
                    <Icon size={23} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="How it works"
            title="From classroom signals to school action."
            text="The platform is intentionally simple to operate on smaller infrastructure while leaving room for serious product growth."
          />
          <div className="grid gap-4">
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="glass-panel grid gap-4 rounded-2xl p-5 sm:grid-cols-[auto_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-tertiary/25 bg-tertiary/10 text-tertiary">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-tertiary">Step {index + 1}</p>
                    <h3 className="mt-1 text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/64">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-panel mx-auto grid max-w-7xl gap-8 rounded-2xl p-6 sm:p-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Founder-led from {contactDetails.address}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
              Built by owners close to the product, users, and deployment reality.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/68">
              ClassPulse AI is being shaped as a practical school-tech product by a focused ownership team across
              product, technology, design, operations, and growth.
            </p>
            <div className="mt-6">
              <ButtonLink to="/team" variant="secondary">
                Meet the owners
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-5">
            {founders.map((person) => (
              <Link key={person.name} to="/team" className="group text-center">
                <div className="mx-auto h-24 w-24 rounded-full border border-primary/30 bg-white/8 p-1 shadow-violet transition group-hover:-translate-y-1 group-hover:border-secondary/60 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                  <img src={person.image} alt={person.name} className="h-full w-full rounded-full object-cover" loading="lazy" />
                </div>
                <p className="mt-3 text-sm font-black leading-tight text-white">{person.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/16 via-secondary/10 to-tertiary/10 p-6 text-white shadow-violet sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                Built for lean deployment, from GitHub to a small Android production server.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="rounded-xl border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
                      <Icon size={21} className="text-tertiary" aria-hidden="true" />
                      <h3 className="mt-3 text-base font-black">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/68">{value.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-5 text-sm font-black text-night transition hover:-translate-y-0.5 hover:bg-primary"
            >
              Talk to us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/72">
            {['React + Vite', 'TailwindCSS', 'Node.js', 'Express', 'Linux', 'Termux', 'Cloudflare Tunnel'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                <CheckCircle2 size={15} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
