export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-aurora px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="hero-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070d] to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-3xl font-black leading-tight text-white glow-text sm:text-5xl">
            {title}
          </h1>
          {text ? (
            <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">{text}</p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
