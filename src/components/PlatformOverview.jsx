import { motion } from 'framer-motion';
import { Activity, BellRing, Eye, LineChart, Sparkles, Users } from 'lucide-react';

const cards = [
  { id: 1, title: 'Attendance', value: '98%', icon: Users, color: 'text-tertiary', border: 'border-border-subtle', pos: 'col-span-2 row-span-1' },
  { id: 2, title: 'Focus Index', value: 'High', icon: Eye, color: 'text-primary', border: 'border-border-subtle', pos: 'col-span-1 row-span-1' },
  { id: 3, title: 'AI Alerts', value: '3 New', icon: BellRing, color: 'text-coral', border: 'border-border-subtle', pos: 'col-span-1 row-span-1' },
  { id: 4, title: 'Engagement', value: 'Steady', icon: Activity, color: 'text-marigold', border: 'border-border-subtle', pos: 'col-span-2 row-span-1' },
  { id: 5, title: 'Live Insights', text: 'Class 10A shows improved participation after recent module change.', icon: Sparkles, color: 'text-secondary', border: 'border-border-subtle', pos: 'col-span-3 row-span-1' },
];

export default function PlatformOverview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl pt-10">
      {/* Background glow removed in favor of strict CSS variables that provide better cross-theme support */}
      
      <div className="rounded-3xl border border-border-subtle bg-surface-glass p-5 sm:p-10 shadow-soft">
        <div className="mb-8 flex items-center justify-between border-b border-border-subtle pb-5">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-coral/90 shadow-sm" />
              <div className="h-3.5 w-3.5 rounded-full bg-marigold/90 shadow-sm" />
              <div className="h-3.5 w-3.5 rounded-full bg-tertiary/90 shadow-sm" />
            </div>
            <div className="ml-4 h-6 w-48 rounded-md bg-surface-elevated border border-border-subtle shadow-inner" />
          </div>
          <div className="h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center shadow-sm">
            <LineChart size={18} className="text-text-muted" />
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-3 grid-rows-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`glass-panel rounded-2xl p-6 ${card.pos} ${card.border} group relative overflow-hidden`}
              >
                {/* Remove low-opacity gradient background for a cleaner, high-contrast surface layer */}
                <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-surface-base border border-border-subtle shadow-sm ${card.color}`}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">{card.title}</p>
                    {card.value ? (
                      <p className="text-3xl font-black text-text-main">{card.value}</p>
                    ) : (
                      <p className="text-sm font-medium text-text-main leading-relaxed">{card.text}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
