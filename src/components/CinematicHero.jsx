import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';

const floatingCards = [
  { label: 'Learning Signals', className: 'left-[8%] top-[34%] sm:left-[12%] lg:left-[16%]' },
  { label: 'Attendance', className: 'right-[7%] top-[35%] sm:right-[12%] lg:right-[17%]' },
  { label: 'AI Insights', className: 'left-[7%] bottom-[22%] sm:left-[16%] sm:bottom-[25%]' },
  { label: 'Engagement', className: 'right-[8%] bottom-[22%] sm:right-[17%] sm:bottom-[27%]' },
  { label: 'Personalized Learning', className: 'left-1/2 bottom-[13%] -translate-x-1/2 sm:bottom-[16%]' },
];

function drawWaveLayer(context, width, height, time, options) {
  const {
    amplitude,
    baseline,
    color,
    frequency,
    lineWidth,
    phase,
    speed,
    verticalDrift,
  } = options;

  context.beginPath();

  for (let x = -40; x <= width + 40; x += 10) {
    const progress = x / width;
    const primary = Math.sin(progress * frequency + time * speed + phase);
    const secondary = Math.sin(progress * frequency * 0.58 - time * speed * 0.74 + phase * 1.6);
    const y = height * baseline + primary * amplitude + secondary * amplitude * 0.42 + Math.sin(time * 0.55 + phase) * verticalDrift;

    if (x === -40) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }

  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.lineCap = 'round';
  context.shadowBlur = 26;
  context.shadowColor = color;
  context.stroke();
  context.shadowBlur = 0;
}

export default function CinematicHero() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, { stiffness: 86, damping: 24, mass: 0.5 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.42, 0.96], [1, 0.76, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.96], [1, 0.982]);

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14, scale: 0.96, filter: 'blur(10px)' },
      visible: (index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          delay: 2.25 + index * 0.14,
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        },
      }),
    }),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) {
      return undefined;
    }

    const render = (timestamp) => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetWidth = Math.max(1, Math.floor(width * dpr));
      const targetHeight = Math.max(1, Math.floor(height * dpr));

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      const time = timestamp * 0.001;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.scale(dpr, dpr);

      const isDark = document.documentElement.classList.contains('dark');

      const gradient = context.createLinearGradient(0, 0, width, height);
      if (isDark) {
        gradient.addColorStop(0, '#030817');
        gradient.addColorStop(0.42, '#07112b');
        gradient.addColorStop(0.72, '#160d31');
        gradient.addColorStop(1, '#05070d');
      } else {
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.42, '#f8faff');
        gradient.addColorStop(0.72, '#eef2ff');
        gradient.addColorStop(1, '#fafafa');
      }
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      const glow = context.createRadialGradient(width * 0.5, height * 0.46, 0, width * 0.5, height * 0.46, width * 0.58);
      glow.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.24)' : 'rgba(99, 102, 241, 0.08)');
      glow.addColorStop(0.44, isDark ? 'rgba(147, 51, 234, 0.13)' : 'rgba(147, 51, 234, 0.04)');
      glow.addColorStop(1, isDark ? 'rgba(5, 7, 13, 0)' : 'rgba(255, 255, 255, 0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      context.globalCompositeOperation = 'lighter';
      drawWaveLayer(context, width, height, time, {
        amplitude: height * 0.072,
        baseline: 0.5,
        color: 'rgba(118, 141, 255, 0.44)',
        frequency: 9.6,
        lineWidth: Math.max(1.2, width * 0.002),
        phase: 0.4,
        speed: 0.82,
        verticalDrift: height * 0.014,
      });
      drawWaveLayer(context, width, height, time, {
        amplitude: height * 0.058,
        baseline: 0.54,
        color: 'rgba(208, 188, 255, 0.36)',
        frequency: 8.3,
        lineWidth: Math.max(1, width * 0.0015),
        phase: 2.3,
        speed: 0.68,
        verticalDrift: height * 0.018,
      });
      drawWaveLayer(context, width, height, time, {
        amplitude: height * 0.048,
        baseline: 0.48,
        color: 'rgba(79, 219, 200, 0.17)',
        frequency: 11.8,
        lineWidth: Math.max(0.8, width * 0.001),
        phase: 4.2,
        speed: 0.5,
        verticalDrift: height * 0.012,
      });

      context.restore();
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollProgress.set(Math.min(window.scrollY / window.innerHeight, 1));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress]);

  return (
    <section className="cinematic-hero relative h-screen overflow-clip bg-paper dark:bg-night transition-colors duration-300" aria-label="ClassPulse AI hero">
      <motion.div className="sticky top-0 h-screen overflow-hidden will-change-transform" style={{ opacity: heroOpacity, scale: heroScale }}>
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        <div className="cinematic-hero-vignette absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="cinematic-title text-balance text-5xl font-black leading-none sm:text-7xl md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, scale: 0.95, y: 16, filter: 'blur(16px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 1.15, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            ClassPulse AI
          </motion.h1>

          <motion.div className="pointer-events-none absolute inset-0 z-10" initial="hidden" animate="visible">
            {floatingCards.map((card, index) => (
              <motion.div key={card.label} custom={index} className={`absolute ${card.className}`} variants={cardVariants}>
                <div className="cinematic-card" style={{ animationDelay: `${index * -1.2}s` }}>
                  {card.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
