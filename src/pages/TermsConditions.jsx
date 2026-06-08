import PageHero from '../components/PageHero.jsx';
import useSeo from '../hooks/useSeo.js';

const terms = [
  {
    title: 'Use of the website',
    text: 'You may use this website to learn about ClassPulse AI and contact the team. You agree not to misuse the site, attempt unauthorized access, or interfere with service availability.',
  },
  {
    title: 'Product information',
    text: 'ClassPulse AI is an evolving startup product. Website descriptions may change as pilots, features, and deployment options mature.',
  },
  {
    title: 'No professional advice',
    text: 'Insights from ClassPulse AI should support human decision-making. They are not a substitute for professional educational, legal, medical, or safeguarding judgment.',
  },
  {
    title: 'Intellectual property',
    text: 'The ClassPulse AI name, content, designs, and software materials are owned by the company or its licensors unless otherwise stated.',
  },
  {
    title: 'Contact',
    text: 'Questions about these terms can be sent to hello@classpulseai.com.',
  },
];

export default function TermsConditions() {
  useSeo({
    title: 'Terms & Conditions | ClassPulse AI',
    description: 'Read the website terms and conditions for ClassPulse AI.',
    path: '/terms-and-conditions',
  });

  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Simple website terms for ClassPulse AI visitors."
        text="These starter terms are included for launch readiness. Review them with legal counsel before public production use."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-6">
          {terms.map((section) => (
            <article key={section.title} className="rounded-xl border border-ink/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.06]">
              <h2 className="text-xl font-black text-ink dark:text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70 dark:text-white/70">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
