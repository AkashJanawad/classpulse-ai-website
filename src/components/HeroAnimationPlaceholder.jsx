export default function HeroAnimationPlaceholder() {
  return (
    <div className="hero-animation-stage absolute inset-0" aria-hidden="true">
      <div className="hero-wave hero-wave-one" />
      <div className="hero-wave hero-wave-two" />
      <div className="hero-wave hero-wave-three" />
      <div className="hero-noise" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070d] to-transparent" />
    </div>
  );
}
