import { motion } from 'motion/react';
import { Terminal as TerminalIcon, Code2, Globe, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
      {/* Decorative background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Decorative Grid Markers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 text-white/10 font-mono text-xs select-none">++</div>
        <div className="absolute bottom-1/4 right-10 text-white/10 font-mono text-xs select-none">++</div>
        <div className="absolute top-1/2 right-1/4 text-white/10 font-mono text-xs select-none opacity-50">+</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-[5.5rem] font-bold mb-6 leading-[0.85] tracking-tighter"
            >
              <span className="opacity-40">{t('hero.architecting')}</span> <br />
              <span className="text-primary text-glow italic font-medium">
                {t('hero.endToEnd')}
              </span><br />
              {t('hero.solutions')}
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-lg mb-10 font-light leading-relaxed tracking-wide"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-dark-bg font-bold rounded-sm flex items-center group"
              >
                {t('projects.title')} 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-colors"
              >
                {t('contact.title')}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Terminal Window Mockup */}
              <div className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-dark-bg/50 px-4 py-3 border-bottom border-dark-border flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-gray-500">mohamed@doukkar: ~</div>
                  <div className="w-10" />
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="flex">
                    <span className="text-primary mr-2">➜</span>
                    <span className="text-white">whoami</span>
                  </div>
                  <div className="text-gray-400 mt-1 mb-4">
                    Cloud Architect & DevOps Engineer. Google Cloud Generative AI Leader. 
                    Passionate about Kubernetes and scaling digital infrastructures.
                  </div>
                  <div className="flex">
                    <span className="text-primary mr-2">➜</span>
                    <span className="text-white">ls certs/</span>
                  </div>
                  <div className="text-primary mt-1 mb-4">
                    CKAD-2025.pdf CKA-2026.pdf CKS-2025.pdf GCP-Cloud-Arch.pdf
                  </div>
                  <div className="flex">
                    <span className="text-primary mr-2">➜</span>
                    <span className="text-white">cat vision.log</span>
                  </div>
                  <div className="text-gray-400 mt-1">
                    [INFO] Empowering DevOps with AI <br />
                    [INFO] Building resilient Cloud Landing Zones <br />
                    [INFO] Mentoring the next gen of Architects
                  </div>
                  <div className="inline-flex mt-4 h-5 w-2 bg-primary animate-pulse" />
                </div>
              </div>

              {/* Floating Stat Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass p-4 rounded-lg shadow-xl border border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none">500+</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Commits</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass p-4 rounded-lg shadow-xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none">20+</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Projects Done</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
