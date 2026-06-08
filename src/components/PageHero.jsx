export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-mesh px-4 pb-14 pt-28 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-3xl font-black leading-tight text-ink dark:text-white sm:text-5xl">
            {title}
          </h1>
          {text ? (
            <p className="mt-4 text-base leading-8 text-ink/70 dark:text-white/72 sm:text-lg">{text}</p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
