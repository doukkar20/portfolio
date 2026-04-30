/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useMotionValue } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-primary selection:text-dark-bg relative overflow-hidden">
      {/* Interactive Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="noise-overlay" />
      <Header />
      <main className="relative z-10">
        <Hero />
        <section id="about" className="py-32 border-y border-white/5 bg-dark-surface/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-primary/50" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-primary">{t('about.title')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tighter leading-tight">
                   {t('about.p1').split('. ')[0]}.
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed font-light mb-8 max-w-xl">
                  {t('about.p1').split('. ').slice(1).join('. ')}
                </p>
                <p className="text-gray-500 leading-relaxed font-light mb-12 max-w-xl italic">
                  {t('about.p2')}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4 pt-10 border-t border-white/5">
                  {[
                    { label: "Architecture", val: "Enterprise" },
                    { label: "Cloud Native", val: "L3 Native" },
                    { label: "Security", val: "CKS Compliant" },
                    { label: "Stack", val: "Full System" },
                    { label: "Deployment", val: "GitOps/CI" },
                    { label: "Leadership", val: "AI Oriented" }
                  ].map(stat => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono font-bold text-gray-600 uppercase tracking-widest">{stat.label}</span>
                      <span className="text-sm font-bold text-white uppercase tracking-tight">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                 <div className="relative z-10 aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-color group-hover:bg-transparent transition-colors duration-1000" />
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                      alt="Developer Portrait" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                 </div>
                 
                 {/* Decorative technical elements */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                 <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                 
                 <div className="absolute -bottom-8 -right-8 p-10 glass rounded-sm border border-white/10 z-20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50" />
                    <div className="text-5xl font-bold text-primary tracking-tighter mb-1">ALX</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 font-bold">SWE_CERTIFIED.V1</div>
                 </div>
              </motion.div>
            </div>

            {/* Education Section */}
            <div className="pt-32 border-t border-white/5">
              <div className="flex items-center gap-4 mb-16 justify-center">
                <div className="h-px w-12 bg-white/10" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-gray-500">{t('about.formation')}</h3>
                <div className="h-px w-12 bg-white/10" />
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden shadow-2xl">
                <motion.div 
                   whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                   className="p-12 bg-dark-bg relative group transition-colors"
                >
                  <div className="text-primary font-mono text-[10px] font-bold mb-4 tracking-[0.2em]">2023 — 2024</div>
                  <h4 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors uppercase">ALX Casablanca</h4>
                  <div className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    {t('about.alx')}
                  </div>
                  <p className="text-gray-500 text-sm font-light mb-10 leading-loose max-w-sm">
                    {t('about.alxDesc')}
                  </p>
                  <a 
                    href="https://intranet.alxswe.com/certificates/9pNZeMCyXT" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-mono font-bold text-white hover:text-primary transition-all uppercase tracking-widest border border-white/10 px-4 py-2 rounded-sm hover:border-primary/50"
                  >
                    {t('about.viewCert')} <span>→</span>
                  </a>
                  <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <img src="https://www.alxafrica.com/wp-content/uploads/2022/01/ALX-Logo.png" alt="" className="w-24 grayscale" />
                  </div>
                </motion.div>

                <motion.div 
                   whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                   className="p-12 bg-dark-bg transition-colors"
                >
                  <div className="text-primary font-mono text-[10px] font-bold mb-4 tracking-[0.2em]">2015 — 2018</div>
                  <h4 className="text-2xl font-bold mb-2 tracking-tight uppercase">CIT Kénitra</h4>
                  <div className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    {t('about.cit')}
                  </div>
                  <p className="text-gray-500 text-sm font-light leading-loose max-w-sm">
                    {t('about.citDesc')}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="pt-32 mt-32 border-t border-white/5">
              <div className="flex items-center gap-4 mb-16 justify-center">
                <div className="h-px w-12 bg-white/10" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-gray-500">{t('languages.title')}</h3>
                <div className="h-px w-12 bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
                {[
                  { name: t('languages.arabic'), level: t('languages.native'), flag: '🇲🇦' },
                  { name: t('languages.french'), level: t('languages.professional'), flag: '🇫🇷' },
                  { name: t('languages.english'), level: t('languages.professional'), flag: '🇺🇸' },
                ].map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                    className="p-10 bg-dark-bg flex flex-col items-center justify-center text-center group transition-colors"
                  >
                    <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all filter drop-shadow-lg scale-100 group-hover:scale-110">{lang.flag}</div>
                    <div className="font-bold text-lg text-white mb-2 tracking-tight uppercase">{lang.name}</div>
                    <div className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
