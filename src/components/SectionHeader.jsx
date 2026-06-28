export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-8 text-white/68 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
