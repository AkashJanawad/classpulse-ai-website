import PageHero from '../components/PageHero.jsx';
import useSeo from '../hooks/useSeo.js';

const sections = [
  {
    title: 'Information we collect',
    text: 'The website contact form may collect your name, email address, organization, and message. Future product deployments should collect only the minimum school data required for agreed classroom workflows.',
  },
  {
    title: 'How we use information',
    text: 'We use contact information to respond to inquiries, discuss pilots, improve the website, and operate ClassPulse AI services. We do not sell personal information.',
  },
  {
    title: 'School data',
    text: 'School and student-related data should be handled under a written agreement with the institution. Access controls, retention periods, and permitted uses should be configured for each deployment.',
  },
  {
    title: 'Security',
    text: 'The production server uses common web security headers and environment-based configuration. Cloudflare Tunnel, HTTPS, strong credentials, and regular updates are recommended for deployment.',
  },
  {
    title: 'Contact',
    text: 'For privacy questions, contact classpulseai@gmail.com.',
  },
];

export default function PrivacyPolicy() {
  useSeo({
    title: 'Privacy Policy | ClassPulse AI',
    description: 'Read the ClassPulse AI privacy policy for website inquiries and school data principles.',
    path: '/privacy-policy',
  });

  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy-first principles for a school-focused AI product."
        text="This starter policy is provided for your website launch. Please have a qualified legal professional review it before handling real student data."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-6">
          {sections.map((section) => (
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
