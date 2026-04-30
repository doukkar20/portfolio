import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 'avito',
    title: "Avito Marketplace",
    description: "Performance optimization and scalable frontend architecture for Morocco's leading marketplace.",
    tech: ["React", "Performance", "Cloud"],
    category: "Fullstack",
    link: "https://www.avito.ma/",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 'godaddy',
    title: "GoDaddy Infrastructure",
    description: "Cloud infrastructure management and automation for global domain and hosting services.",
    tech: ["IaC", "AWS", "Security"],
    category: "Cloud",
    link: "https://www.godaddy.com/fr",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 'airbnb',
    title: "Airbnb Experiences",
    description: "Strategic contributions to the experiences platform, focusing on high-availability backend systems.",
    tech: ["Microservices", "Java", "Backend"],
    category: "Backend",
    link: "https://www.airbnb.fr/",
    github: "#",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'cathedis',
    title: "Cathedis Delivery Solution",
    description: "Contributed to the development of a high-performance logistics platform, optimizing routing and real-time tracking systems.",
    tech: ["Next.js", "PostgreSQL", "Cloud"],
    category: "Fullstack",
    link: "https://cathedis.ma/",
    github: "#",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 'abac',
    title: "ABAC & Security Systems",
    description: "Specialized in Attribute Based Access Control and Cryptographic modules (FIPS 140-2), ensuring Zero-Trust infrastructure.",
    tech: ["Security", "FIPS 140-2", "ABAC"],
    category: "Security",
    link: "#",
    github: "https://github.com/doukkar2018",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'vault',
    title: "SecureVault Core",
    description: "Multi-platform secure document vault with biometric authentication and end-to-end encryption.",
    tech: ["React Native", "TypeScript", "Rust", "AES-256"],
    category: "Mobile",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'gcp',
    title: "GCP Landing Zone Architect",
    description: "Designed a secure landing zone on Google Cloud with a custom full-stack management dashboard for resource provisioning.",
    tech: ["Terraform", "GCP", "React", "Node.js"],
    category: "Fullstack",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 'ai',
    title: "Vertex AI Studio Chatbot",
    description: "Custom Generative AI chatbot built with Gemini 1.5 Pro and Vertex AI Studio for intelligent document Q&A.",
    tech: ["Gemini API", "Vertex AI", "Next.js", "TypeScript"],
    category: "AI",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'k8s',
    title: "Kubernetes Hardening Suite",
    description: "Implementation of strict CKS-compliant security policies and runtime thread detection for K8s clusters.",
    tech: ["Kubernetes", "Falco", "OPA Gatekeeper", "Go"],
    category: "Security",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'blog',
    title: "DevOps Excellence Blogs",
    description: "A series of technical guides for CKAD, CKA, and CKS certifications, helping thousands pass their exams.",
    tech: ["Markdown", "DevOps", "CI/CD", "Mentorship"],
    category: "Mentorship",
    link: "https://techwithmohamed.com",
    github: "#",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  // Extract unique technologies for secondary filter or categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="work" className="py-32 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-none"
            >
              {t('projects.title').split(' ')[0]} <span className="text-primary text-glow">{t('projects.title').split(' ').slice(1).join(' ')}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 font-light"
            >
              {t('projects.description')}
            </motion.p>
          </div>
          <motion.a
            href="https://github.com/doukkar2018"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(0,255,156,0.3)' }}
            className="flex h-fit"
          >
            <div className="flex items-center gap-4 px-6 py-3 border border-dark-border rounded-full text-sm font-mono text-gray-500 uppercase tracking-widest bg-dark-surface/50 hover:text-white transition-colors">
              <Code2 size={16} className="text-primary" />
              <span>{t('projects.more')}</span>
            </div>
          </motion.a>
        </div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          <div className="p-2 bg-dark-surface border border-dark-border rounded-full flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-dark-bg shadow-[0_0_15px_rgba(0,255,156,0.3)]' 
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center text-gray-600 gap-2 ml-4">
             <Layers size={14} />
             <AnimatePresence mode="wait">
               <motion.span 
                 key={filteredProjects.length}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.8 }}
                 className="text-[10px] font-mono uppercase tracking-[0.2em]"
               >
                 {filteredProjects.length} Systems Found
               </motion.span>
             </AnimatePresence>
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col h-full bg-dark-surface border border-dark-border rounded-sm overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_50px_-15px_rgba(0,255,156,0.2)] transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 z-20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 z-20 pointer-events-none" />
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-80 transition-all duration-700"
                  />
                  
                  {/* Technical Scanning Line */}
                  <motion.div 
                    initial={{ top: '-100%' }}
                    whileHover={{ 
                      top: '100%',
                      transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute left-0 w-full h-1 bg-primary/20 z-20 pointer-events-none blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 right-4 flex gap-2 z-30">
                    <motion.a 
                      href={project.github} 
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 156, 0.1)' }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-dark-bg/60 backdrop-blur-xl rounded-sm text-white hover:text-primary transition-all border border-white/5 hover:border-primary/50"
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a 
                      href={project.link} 
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 156, 0.1)' }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-dark-bg/60 backdrop-blur-xl rounded-sm text-white hover:text-primary transition-all border border-white/5 hover:border-primary/50"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>

                  <div className="absolute bottom-4 left-4 z-30">
                    <span className="text-[9px] font-mono font-bold text-white/40 tracking-widest uppercase">
                       REF_ID: {project.id.toUpperCase()}_{Math.floor(Math.random() * 9000) + 1000}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="absolute -top-10 right-8 text-[60px] font-black text-white/[0.03] pointer-events-none select-none">
                    0{index + 1}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-primary/60 border border-primary/10 px-2 py-1 rounded-sm bg-primary/[0.02]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight font-display uppercase">
                    {t(`projects.${project.id}.title`, project.title)}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 line-clamp-2">
                    {t(`projects.${project.id}.desc`, project.description)}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                        {project.category}
                      </span>
                    </div>
                    <motion.a 
                      href={project.link} 
                      whileHover={{ x: 5 }}
                      className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group/link"
                    >
                      Initialize System
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
