import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { featureCards } from '../data/site.js';

export default function FeaturesCarousel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 300, damping: 40, mass: 1 });

  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        const maxScroll = Math.max(0, trackWidth - containerWidth);
        setConstraints({ left: -maxScroll, right: 0 });
      }
    };
    
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  // Cursor based parallax (only applies if not currently dragging)
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const xPos = e.clientX - left;
      const progress = xPos / width; // 0 to 1
      
      // Calculate target X based on mouse progress
      const targetX = constraints.left * progress;
      
      // Only apply if we have space to scroll
      if (constraints.left < 0) {
         // Add a gentle pull towards cursor
         const currentX = dragX.get();
         dragX.set(currentX + (targetX - currentX) * 0.05);
      }
    }
  };

  const handleDrag = (event, info) => {
    // Determine active card based on drag position
    if (containerRef.current && trackRef.current) {
      const cardWidth = 380; // approximate width + gap
      const offset = -dragX.get();
      const newIndex = Math.max(0, Math.min(featureCards.length - 1, Math.round(offset / cardWidth)));
      setActiveIndex(newIndex);
    }
  };

  const handleDragEnd = (event, info) => {
    // Snap to closest card
    const cardWidth = 380; // card max-w (320px) + gap
    const snapX = -activeIndex * cardWidth;
    
    // Ensure we don't snap past constraints
    const boundedSnapX = Math.max(constraints.left, Math.min(0, snapX));
    dragX.set(boundedSnapX);
  };

  return (
    <div 
      className="relative w-full max-w-[100vw] mx-auto py-20 px-4 sm:px-8 overflow-hidden select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ touchAction: 'none' }}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-8 cursor-grab active:cursor-grabbing w-max px-[5vw] lg:px-[15vw]"
        drag="x"
        dragConstraints={constraints}
        style={{ x: springX }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
      >
        {featureCards.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={feature.title}
              className="relative w-[320px] shrink-0"
              animate={{
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.6,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onHoverStart={() => setActiveIndex(index)}
              onClick={() => {
                setActiveIndex(index);
                const cardWidth = 380;
                dragX.set(Math.max(constraints.left, Math.min(0, -index * cardWidth)));
              }}
            >
              <motion.div
                className={`h-full relative overflow-hidden rounded-[2.5rem] glass-panel p-10 transition-all duration-500 ${
                  isActive 
                    ? 'shadow-glow border-primary/40 bg-surface-elevated' 
                    : 'border-border-subtle bg-surface-base'
                }`}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: 'var(--shadow-glow)',
                  borderColor: 'rgba(208,188,255,0.6)'
                }}
              >
                {/* Animated Accent Background on Active/Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10 pointer-events-none"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-border-subtle shadow-sm mb-8 transition-colors duration-500 ${
                      isActive ? 'bg-surface-elevated text-primary' : 'bg-surface-base text-text-muted'
                    }`}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h3 className={`text-2xl font-black mb-4 transition-colors duration-500 ${isActive ? 'text-text-main' : 'text-text-muted'}`}>
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-muted">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Scroll indicator hint for users */}
      <div className="flex justify-center mt-12 gap-3 opacity-50">
        <div className="h-1 w-12 rounded-full bg-border-strong overflow-hidden relative">
           <motion.div 
             className="absolute top-0 bottom-0 left-0 bg-text-muted rounded-full"
             style={{ 
               width: '30%',
               x: useTransform(springX, [constraints.left, 0], ['230%', '0%']) 
             }} 
           />
        </div>
      </div>
    </div>
  );
}
