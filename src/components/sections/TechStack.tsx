import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Terminal, 
  Zap,
  Cpu,
  Ship,
  Cloud,
  Code2,
  Activity,
  GitBranch,
  Layout,
  Server,
  Database,
  Smartphone,
  Shield,
  Globe,
  Anchor,
  Layers,
  Container,
  GitFork,
  Wind,
  Lock
} from 'lucide-react';

const technologies = [
  { name: 'Kubernetes', icon: Ship, color: 'text-blue-500' },
  { name: 'Google Cloud', icon: Cloud, color: 'text-red-400' },
  { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
  { name: 'React Native', icon: Smartphone, color: 'text-purple-400' },
  { name: 'React / Next.js', icon: Layout, color: 'text-blue-400' },
  { name: 'Node.js', icon: Server, color: 'text-green-400' },
  { name: 'TypeScript', icon: Cpu, color: 'text-blue-600' },
  { name: 'Python / Go', icon: Code2, color: 'text-yellow-500' },
  { name: 'Terraform', icon: Zap, color: 'text-purple-500' },
  { name: 'PostgreSQL', icon: Database, color: 'text-indigo-400' },
  { name: 'Docker', icon: Container, color: 'text-blue-600' },
  { name: 'CI/CD', icon: GitBranch, color: 'text-white' },
  { name: 'Security (ABAC)', icon: Lock, color: 'text-red-500' },
  { name: 'NIST Standards', icon: Shield, color: 'text-blue-400' },
  { name: 'Cryptography', icon: Lock, color: 'text-yellow-600' },
  { name: 'Redis / NoSQL', icon: Zap, color: 'text-red-400' },
  { name: 'Prometheus', icon: Activity, color: 'text-orange-500' },
  { name: 'GraphQL', icon: Layers, color: 'text-pink-400' },
  { name: 'Apache Kafka', icon: Zap, color: 'text-white' },
  { name: 'Tailwind CSS', icon: Wind, color: 'text-cyan-400' },
];

export default function TechStack() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-32 bg-dark-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase italic text-glow"
          >
            {t('tech.title')}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-gray-400 max-w-2xl mx-auto font-light"
          >
            {t('projects.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-dark-border border border-dark-border overflow-hidden rounded-sm shadow-2xl">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: (index % 5) * 0.1 + Math.floor(index / 5) * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transition: { duration: 0.2 }
              }}
              className="bg-dark-bg p-12 flex flex-col items-center justify-center group cursor-default relative overflow-hidden"
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5, ease: "easeInOut" }
                }}
                className="relative z-10"
              >
                <tech.icon 
                  className={`w-12 h-12 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_20px_rgba(0,255,156,0.5)] ${tech.color}`} 
                />
              </motion.div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold group-hover:text-white transition-colors relative z-10">
                {tech.name}
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
