import { motion } from 'framer-motion';
import { Camera, CheckCircle, Database, FileVideo, LayoutDashboard, ScanSearch, Wand2 } from 'lucide-react';

const pipelineSteps = [
  { id: 1, title: 'Classroom Video', icon: Camera, desc: 'Secure capture of daily school routines' },
  { id: 2, title: 'Frame Extraction', icon: FileVideo, desc: 'Sampling key moments efficiently' },
  { id: 3, title: 'Vision Language Model', icon: Wand2, desc: 'AI analyzes context and activity' },
  { id: 4, title: 'Automatic Labeling', icon: ScanSearch, desc: 'Generates focus & attendance tags' },
  { id: 5, title: 'Teacher Validation', icon: CheckCircle, desc: 'Human-in-the-loop review' },
  { id: 6, title: 'Model Training', icon: Database, desc: 'Continuous active learning' },
  { id: 7, title: 'Analytics Dashboard', icon: LayoutDashboard, desc: 'Actionable school insights' },
];

export default function Pipeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  const lineVariants = {
    hidden: { scaleY: 0, transformOrigin: 'top' },
    show: { scaleY: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="relative mx-auto max-w-4xl py-16 px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="relative"
      >
        {/* Continuous Animated Line Background */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-border-strong -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div 
            className="w-full h-full bg-gradient-to-b from-primary via-secondary to-tertiary shadow-[0_0_15px_rgba(208,188,255,0.6)]"
            variants={lineVariants}
          />
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className={`relative flex items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Connector Node */}
                <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-surface-base border-4 border-primary z-10 -translate-x-1/2 shadow-sm transition-transform duration-300 hover:scale-150 cursor-pointer" />

                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 flex ${isEven ? 'md:pr-16 md:justify-end text-left md:text-right' : 'md:pl-16 md:justify-start text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass-panel p-8 rounded-3xl border border-border-subtle w-full max-w-sm group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className={`flex items-center gap-5 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-base border border-border-subtle text-primary shadow-sm group-hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-black text-text-main leading-tight">{step.title}</h3>
                    </div>
                    
                    <p className="text-base text-text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
