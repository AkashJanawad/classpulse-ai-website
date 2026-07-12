import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Code2, Database, Layout, ScanEye, Server, Settings } from 'lucide-react';

const archModules = [
  { id: 'flutter', title: 'Flutter App', icon: Layout, type: 'Client', col: 'col-span-2 md:col-span-1' },
  { id: 'api', title: 'Backend API', icon: Server, type: 'FastAPI', col: 'col-span-2 md:col-span-1' },
  { id: 'opencv', title: 'OpenCV Processing', icon: ScanEye, type: 'Vision', col: 'col-span-2 md:col-span-1' },
  { id: 'yolo', title: 'YOLO Models', icon: Code2, type: 'Detection', col: 'col-span-2 md:col-span-1' },
  { id: 'vlm', title: 'Vision Language Model', icon: BrainCircuit, type: 'Analysis', col: 'col-span-2 md:col-span-2' },
  { id: 'training', title: 'Training Engine', icon: Settings, type: 'Active Learning', col: 'col-span-2 md:col-span-1' },
  { id: 'analytics', title: 'Analytics Engine', icon: Database, type: 'Insights', col: 'col-span-2 md:col-span-1' },
];

export default function Architecture() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl py-12 px-4">
      {/* Background Glow removed for strict semantic compliance */}

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 relative"
      >
        {archModules.map((module, index) => {
          const Icon = module.icon;
          return (
            <motion.div 
              key={module.id} 
              variants={item}
              whileHover={{ scale: 1.03, translateY: -5 }}
              className={`glass-panel p-6 rounded-3xl flex flex-col items-start gap-5 border border-border-subtle group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${module.col}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              
              <div className="flex justify-between w-full items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-base border border-border-subtle text-text-main group-hover:text-tertiary shadow-sm transition-all duration-300">
                  <Icon size={28} />
                </div>
                {index < archModules.length - 1 && (
                  <ArrowRight size={20} className="text-border-strong group-hover:text-tertiary transition-colors md:hidden" />
                )}
              </div>
              
              <div className="mt-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{module.type}</p>
                <h4 className="text-lg font-black text-text-main leading-tight">{module.title}</h4>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
