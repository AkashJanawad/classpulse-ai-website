import SectionHeader from './SectionHeader.jsx';

export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-mesh px-4 pb-14 pt-28 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
