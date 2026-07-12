import { motion } from 'framer-motion';

const techItems = [
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', cat: 'Client' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', cat: 'Web' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', cat: 'UI' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', cat: 'Backend' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', cat: 'API' },
  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', cat: 'Vision' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', cat: 'AI' },
  { name: 'YOLO', icon: '/logo.png', cat: 'Detection', isCustom: true }, 
  { name: 'Vision LLM', icon: '/logo.png', cat: 'Reasoning', isCustom: true },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', cat: 'Database' },
];

export default function TechStack() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } }
  };

  return (
    <div className="mx-auto w-full max-w-6xl py-12 px-4 text-center">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-6 sm:gap-8"
      >
        {techItems.map((tech) => (
          <motion.div
            key={tech.name}
            variants={item}
            whileHover={{ scale: 1.08, translateY: -8 }}
            className="group relative flex w-36 flex-col items-center gap-4 rounded-3xl glass-panel p-6 border border-border-subtle overflow-hidden cursor-default transition-all duration-300 hover:shadow-lg"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="h-14 w-14 flex items-center justify-center relative z-10">
              {tech.isCustom ? (
                <img src={tech.icon} alt={tech.name} className="h-12 w-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-sm" />
              ) : (
                <img src={tech.icon} alt={tech.name} className="h-14 w-14 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-sm" />
              )}
            </div>
            
            <div className="relative z-10 w-full mt-2">
              <h4 className="text-base font-black text-text-main mb-1">{tech.name}</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-primary transition-colors">{tech.cat}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
