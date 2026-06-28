import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const FRAME_COUNT = 240;
const FPS = 30;
const FRAME_DURATION = 1000 / FPS;
const FRAME_PATH = '/frames/ezgif-frame-';

const floatingTags = [
  { label: 'Insight Stream', className: 'left-[7%] top-[40%] sm:left-[10%] lg:left-[14%]' },
  { label: 'AI Classroom Pulse Platform', className: 'right-[5%] top-[38%] sm:right-[9%] lg:right-[13%]' },
  { label: 'Engagement', className: 'left-[8%] bottom-[20%] sm:left-[15%] sm:bottom-[24%]' },
  { label: 'Attendance', className: 'right-[8%] bottom-[22%] sm:right-[17%] sm:bottom-[26%]' },
  { label: 'Learning Signals', className: 'left-1/2 bottom-[13%] -translate-x-1/2 sm:bottom-[16%]' },
];

function frameUrl(index) {
  return `${FRAME_PATH}${String(index).padStart(3, '0')}.jpg`;
}

export default function CinematicHero() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const rafRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const currentFrameRef = useRef(0);
  const [isComplete, setIsComplete] = useState(false);
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, { stiffness: 86, damping: 24, mass: 0.5 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.18, 0.42], [1, 0.62, 0.04]);
  const heroScale = useTransform(smoothProgress, [0, 0.42], [1, 0.982]);

  const tagVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
      visible: (index) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          delay: index * 0.14,
          duration: 0.72,
          ease: [0.16, 1, 0.3, 1],
        },
      }),
    }),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: false });
    if (!canvas || !context) {
      return undefined;
    }

    let isMounted = true;

    const sizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetWidth = Math.max(1, Math.floor(width * dpr));
      const targetHeight = Math.max(1, Math.floor(height * dpr));

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }
    };

    const drawFrame = (image) => {
      if (!image?.complete || !image.naturalWidth) {
        return;
      }

      sizeCanvas();

      const imageRatio = image.naturalWidth / image.naturalHeight;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imageRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imageRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imageRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    const preloadFrames = () =>
      Promise.all(
        Array.from({ length: FRAME_COUNT }, (_, index) => {
          const image = new Image();
          image.decoding = 'async';
          imagesRef.current[index] = image;

          return new Promise((resolve) => {
            image.onload = () => {
              if (index === 0) {
                drawFrame(image);
              }
              resolve();
            };
            image.onerror = resolve;
            image.src = frameUrl(index + 1);
          });
        }),
      );

    const animate = (timestamp) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      if (timestamp - lastFrameTimeRef.current >= FRAME_DURATION && currentFrameRef.current < FRAME_COUNT - 1) {
        currentFrameRef.current += 1;
        lastFrameTimeRef.current = timestamp;
        drawFrame(imagesRef.current[currentFrameRef.current]);
      }

      if (currentFrameRef.current < FRAME_COUNT - 1) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      drawFrame(imagesRef.current[FRAME_COUNT - 1]);
      if (isMounted) {
        setIsComplete(true);
      }
    };

    const handleResize = () => {
      drawFrame(imagesRef.current[currentFrameRef.current] || imagesRef.current[FRAME_COUNT - 1]);
    };

    preloadFrames().then(() => {
      if (!isMounted) {
        return;
      }
      rafRef.current = requestAnimationFrame(animate);
    });

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
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
    <section className="cinematic-hero relative h-screen overflow-clip bg-[#05070d]" aria-label="ClassPulse AI cinematic hero">
      <motion.div
        className="sticky top-0 h-screen overflow-hidden will-change-transform"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        <motion.div
          className="pointer-events-none absolute inset-0 z-10 hidden sm:block"
          initial="hidden"
          animate={isComplete ? 'visible' : 'hidden'}
        >
          {floatingTags.map((tag, index) => (
            <motion.div
              key={tag.label}
              custom={index}
              className={`absolute ${tag.className}`}
              variants={tagVariants}
            >
              <div className="cinematic-tag" style={{ animationDelay: `${index * -1.15}s` }}>
                {tag.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
