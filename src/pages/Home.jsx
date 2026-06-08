import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink.jsx';
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
      <section className="relative overflow-hidden bg-mesh px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1fr_.92fr]">
          <div>
            <p className="inline-flex rounded-full border border-teal-700/20 bg-white/76 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm dark:border-teal-300/20 dark:bg-white/8 dark:text-teal-200">
              AI classroom pulse platform for schools
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.05] text-ink dark:text-white sm:text-6xl lg:text-7xl">
              ClassPulse AI
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72 dark:text-white/72 sm:text-xl">
              See attendance, engagement, and learning signals in one fast dashboard so teachers and school leaders can
              act earlier with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Start a pilot</ButtonLink>
              <ButtonLink to="/features" variant="secondary">
                Explore features
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-ink/10 bg-white/72 p-4 shadow-sm dark:border-white/10 dark:bg-white/8">
                  <p className="text-2xl font-black text-ink dark:text-white">{metric.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-ink/50 dark:text-white/50">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm text-ink/64 dark:text-white/64">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <ProductVisual />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What it does"
            title="A practical AI layer for the school day."
            text="ClassPulse AI is designed around the signals schools already understand: attendance, participation, class momentum, and timely support."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.slice(0, 6).map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700 text-white dark:bg-teal-400 dark:text-night">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-ink dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-white/68">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-white/[0.03] sm:px-6 lg:px-8">
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
                <article key={item.title} className="grid gap-4 rounded-xl border border-ink/10 bg-paper p-5 dark:border-white/10 dark:bg-night sm:grid-cols-[auto_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-white dark:bg-teal-400 dark:text-night">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-black text-ink dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink/68 dark:text-white/68">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.06] sm:p-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Founder-led from {contactDetails.address}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-ink dark:text-white sm:text-4xl">
              Built by owners who are close to the product, the users, and the deployment reality.
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/70 dark:text-white/70">
              ClassPulse AI is not just a landing page. It is being shaped as a practical school-tech product by a
              focused ownership team across product, technology, design, operations, and growth.
            </p>
            <div className="mt-6">
              <ButtonLink to="/team" variant="secondary">
                Meet the owners
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-5 lg:grid-cols-5">
            {founders.map((person) => (
              <Link key={person.name} to="/team" className="group text-center">
                <div className="mx-auto h-24 w-24 rounded-full border-4 border-mist bg-white p-1 shadow-sm transition group-hover:-translate-y-1 group-hover:border-teal-500 dark:border-white/12 dark:bg-night sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-black leading-tight text-ink dark:text-white">{person.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-ink p-6 text-white shadow-soft dark:bg-white dark:text-ink sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                Built for lean deployment, from GitHub to a small Android production server.
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="rounded-xl bg-white/10 p-4 dark:bg-ink/8">
                      <Icon size={21} className="text-marigold dark:text-teal-700" aria-hidden="true" />
                      <h3 className="mt-3 text-base font-black">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70 dark:text-ink/68">{value.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-marigold px-5 text-sm font-black text-ink transition hover:bg-white"
            >
              Talk to us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/72 dark:text-ink/68">
            {['React + Vite', 'TailwindCSS', 'Node.js', 'Express', 'Linux', 'Termux', 'Cloudflare Tunnel'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 dark:bg-ink/8">
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
