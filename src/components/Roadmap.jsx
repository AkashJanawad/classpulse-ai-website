import { motion } from 'framer-motion';
import { CheckCircle2, Construction } from 'lucide-react';

const roadmapItems = [
  { id: 1, title: 'Dashboard', status: 'done', desc: 'Real-time UI for insights and alerts.' },
  { id: 2, title: 'Video Processing', status: 'done', desc: 'Frame extraction and basic object detection.' },
  { id: 3, title: 'Training Pipeline', status: 'done', desc: 'Data ingestion and secure storage logic.' },
  { id: 4, title: 'Vision Language Models', status: 'wip', desc: 'Integrating context-aware LLMs for deeper behavior insights.' },
  { id: 5, title: 'Active Learning', status: 'wip', desc: 'Continuous model improvement through teacher validation loops.' },
  { id: 6, title: 'Cloud Deployment', status: 'wip', desc: 'Scaling infrastructure beyond local edge networks.' },
];

export default function Roadmap() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl py-16 px-4 sm:px-6">
      <div className="absolute left-8 sm:left-1/2 top-12 bottom-12 w-[2px] bg-border-strong -translate-x-1/2 rounded-full" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-10"
      >
        {roadmapItems.map((step, index) => {
          const isDone = step.status === 'done';
          const Icon = isDone ? CheckCircle2 : Construction;
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={step.id} 
              variants={item}
              className={`relative flex items-center gap-8 sm:gap-0 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
            >
              <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-surface-base flex items-center justify-center bg-surface-base z-10 shadow-sm transition-transform hover:scale-125">
                <div className={`w-3.5 h-3.5 rounded-full ${isDone ? 'bg-tertiary shadow-[0_0_10px_rgba(79,219,200,0.8)]' : 'bg-marigold shadow-[0_0_10px_rgba(245,182,64,0.8)]'}`} />
              </div>

              <div className={`w-full pl-16 sm:pl-0 sm:w-1/2 flex ${isEven ? 'sm:pr-12 sm:justify-end text-left sm:text-right' : 'sm:pl-12 sm:justify-start text-left'}`}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`glass-panel p-6 rounded-3xl border ${isDone ? 'border-tertiary/30' : 'border-marigold/30'} w-full max-w-[340px] relative overflow-hidden group shadow-sm hover:shadow-md`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${isDone ? 'from-tertiary/5' : 'from-marigold/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className={`flex items-center gap-4 mb-3 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    <div className={`p-2 rounded-xl bg-surface-base border border-border-subtle shadow-sm ${isDone ? 'text-tertiary' : 'text-marigold'}`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-black text-text-main">{step.title}</h4>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
