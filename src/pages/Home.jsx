import { ArrowRight, CheckCircle2, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Architecture from '../components/Architecture.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import CinematicHero from '../components/CinematicHero.jsx';
import FeaturesCarousel from '../components/FeaturesCarousel.jsx';
import Pipeline from '../components/Pipeline.jsx';
import PlatformOverview from '../components/PlatformOverview.jsx';
import Roadmap from '../components/Roadmap.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import TechStack from '../components/TechStack.jsx';
import { contactDetails, founders, metrics, values } from '../data/site.js';
import useSeo from '../hooks/useSeo.js';

export default function Home() {
  useSeo({
    title: 'ClassPulse AI | Classroom Intelligence for Modern Schools',
    description: 'ClassPulse AI turns attendance, engagement, and classroom notes into privacy-aware school insights.',
    path: '/',
  });

  return (
    <div className="flex flex-col bg-surface-base transition-colors duration-300">
      <div id="home">
        <CinematicHero />
      </div>

      <main className="flex-1 w-full relative z-10 transition-colors duration-300">
        
        {/* PLATFORM SECTION */}
        <section id="platform" className="relative px-4 py-32 sm:px-6 lg:px-8 scroll-mt-16 bg-surface-accent">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Intelligence in Action"
              title="A live operating view for modern schools."
              text="Connect school signals into actionable insights: attention patterns, attendance trends, and AI summaries that stay grounded in human review."
              align="center"
            />
            
            <div className="mt-20">
              <PlatformOverview />
            </div>

            <div className="mt-24 grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass-panel rounded-3xl p-10 text-center shadow-soft hover:shadow-md transition-shadow">
                  <p className="text-6xl font-black text-primary mb-4 drop-shadow-sm">{metric.value}</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-text-muted">{metric.label}</p>
                  <p className="mt-4 text-base text-text-muted leading-relaxed">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="px-4 py-32 sm:px-6 lg:px-8 scroll-mt-16 bg-surface-base">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="What it does"
              title="Intelligence at every level of the school day."
              text="Comprehensive AI tools presented as practical workflows schools can pilot effortlessly."
              align="center"
            />
            <div className="mt-16 overflow-hidden">
              <FeaturesCarousel />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION (Standalone) */}
        <section id="how-it-works" className="px-4 py-32 sm:px-6 lg:px-8 bg-surface-accent">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Pipeline"
              title="From classroom signals to school action."
              text="An intentionally simple pipeline to operate on smaller infrastructure while leaving room for serious product growth."
              align="center"
            />
            <div className="mt-20">
              <Pipeline />
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section id="technology" className="px-4 py-32 sm:px-6 lg:px-8 scroll-mt-16 bg-surface-base">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Tech Stack"
              title="Powered by modern frameworks."
              text="A blend of robust backend processing and fluid frontend experiences."
              align="center"
            />
            <div className="mt-20">
              <TechStack />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (Unified) */}
        <section id="about" className="px-4 py-32 sm:px-6 lg:px-8 scroll-mt-16 bg-surface-accent">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="About Us"
              title="Our Mission, Vision, and Architecture."
              text="Discover the foundational ideas and technical design driving ClassPulse AI."
              align="center"
            />
            
            {/* Mission & Vision Subsections */}
            <div className="mt-24 grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
              <div className="glass-panel p-12 rounded-[2rem] shadow-soft hover:shadow-md transition-shadow">
                <div className="flex items-center gap-5 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-base border border-border-subtle text-primary shadow-sm">
                    <Target size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-text-main">Our Mission</h3>
                </div>
                <p className="text-lg text-text-muted leading-relaxed">
                  To provide privacy-aware classroom intelligence that empowers schools to act on early signals, make clearer decisions, and support students effectively without compromising human judgment.
                </p>
              </div>

              <div className="glass-panel p-12 rounded-[2rem] shadow-soft hover:shadow-md transition-shadow">
                <div className="flex items-center gap-5 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-base border border-border-subtle text-secondary shadow-sm">
                    <Lightbulb size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-text-main">Our Vision</h3>
                </div>
                <p className="text-lg text-text-muted leading-relaxed">
                  To become the invisible, supportive pulse of modern education—where AI seamlessly bridges the gap between classroom activity and actionable school-wide insights.
                </p>
              </div>
            </div>

            {/* Architecture Subsection */}
            <div className="mt-32">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-text-main">System Architecture</h3>
                <p className="mt-4 text-base text-text-muted">Lean, scalable intelligence from edge to cloud.</p>
              </div>
              <Architecture />
            </div>

            {/* Team Subsection */}
            <div className="mt-32">
              <div className="glass-panel mx-auto grid max-w-7xl gap-16 rounded-[2.5rem] p-12 sm:p-16 lg:grid-cols-[1fr_1.2fr] lg:items-center shadow-soft">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    Founder-led from {contactDetails.address}
                  </p>
                  <h3 className="mt-6 text-balance text-4xl font-black leading-tight text-text-main">
                    Built by owners close to the product and users.
                  </h3>
                  <p className="mt-6 text-lg leading-relaxed text-text-muted">
                    ClassPulse AI is being shaped as a practical school-tech product by a focused ownership team across
                    product, technology, design, operations, and growth.
                  </p>
                  <div className="mt-10">
                    <ButtonLink to="/team" variant="secondary">
                      Meet the full team
                    </ButtonLink>
                  </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-3">
                  {founders.slice(0,3).map((person) => (
                    <Link key={person.name} to="/team" className="group text-center">
                      <div className="mx-auto h-28 w-28 rounded-full border-4 border-surface-base bg-surface-elevated p-1 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(208,188,255,0.4)]">
                        <img src={person.image} alt={person.name} className="h-full w-full rounded-full object-cover" loading="lazy" />
                      </div>
                      <p className="mt-5 text-base font-bold leading-tight text-text-main">{person.name}</p>
                      <p className="mt-2 text-sm font-medium text-text-muted">{person.role.split(',')[0]}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section id="roadmap" className="px-4 py-32 sm:px-6 lg:px-8 scroll-mt-16 bg-surface-base">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="The Journey"
              title="Building the future of education."
              text="Our progress and what's coming next for the ClassPulse AI platform."
              align="center"
            />
            <div className="mt-20">
              <Roadmap />
            </div>
          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section id="contact" className="px-4 py-32 sm:px-6 lg:px-8 scroll-mt-16 bg-surface-accent">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-border-subtle bg-surface-elevated p-12 text-text-main shadow-soft sm:p-16 transition-shadow hover:shadow-lg">
            <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-text-main">
                  Built for lean deployment, from GitHub to production.
                </h2>
                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                  {values.map((value) => {
                    const Icon = value.icon;
                    return (
                      <div key={value.title} className="rounded-3xl border border-border-subtle bg-surface-base p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated border border-border-subtle text-tertiary mb-6 shadow-sm">
                          <Icon size={24} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-text-main">{value.title}</h3>
                        <p className="mt-4 text-base leading-relaxed text-text-muted">{value.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-text-main px-10 text-lg font-bold text-text-inverse shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02]"
                >
                  Talk to us <ArrowRight size={24} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="mt-20 flex flex-wrap gap-4 text-sm font-semibold text-text-muted">
              {['React + Vite', 'TailwindCSS', 'Node.js', 'Express', 'Linux', 'Termux', 'Cloudflare Tunnel'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-base px-5 py-2.5 shadow-sm">
                  <CheckCircle2 size={18} className="text-primary" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
