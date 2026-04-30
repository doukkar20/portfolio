import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const socialLinks = [
    { name: t('contact.email'), icon: Mail, value: 'doukkar2018@gmail.com', href: 'mailto:doukkar2018@gmail.com' },
    { name: 'Phone', icon: Phone, value: '+212 663-646-508', href: 'tel:+212663646508' },
    { name: 'GitHub', icon: Github, value: 'github.com/doukkar20', href: 'https://github.com/doukkar20' },
    { name: 'LinkedIn', icon: Linkedin, value: 'linkedin.com/in/mohamed-doukkar', href: 'https://ma.linkedin.com/in/mohamed-doukkar/fr' },
  ];

  return (
    <section id="contact" className="py-32 bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-primary">{t('contact.title')}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.85]"
            >
              Architect <br />
              <span className="text-primary text-glow italic font-medium lowercase">the</span> <br />
              Future.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 font-light mb-12 max-w-md leading-relaxed tracking-wide"
            >
              {t('contact.description')}
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="p-3 bg-dark-bg border border-dark-border rounded-lg text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all">
                    <link.icon size={24} />
                  </div>
                  <div className="ml-5">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">{link.name}</div>
                    <div className="text-lg font-medium text-white flex items-center gap-2 group/text">
                      {link.value}
                      <ArrowUpRight size={16} className="text-gray-600 group-hover/text:text-primary transition-colors" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-sm border border-dark-border self-start"
          >
            <motion.form 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="space-y-2"
              >
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 ml-1">{t('contact.name')}</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-dark-bg border border-dark-border rounded-sm px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors" 
                />
              </motion.div>
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="space-y-2"
              >
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 ml-1">{t('contact.email')}</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-dark-bg border border-dark-border rounded-sm px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors" 
                />
              </motion.div>
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="space-y-2"
              >
                <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 ml-1">{t('contact.message')}</label>
                <textarea 
                  rows={4}
                  placeholder="..."
                  className="w-full bg-dark-bg border border-dark-border rounded-sm px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors resize-none" 
                />
              </motion.div>
              <motion.button
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-dark-bg font-bold py-4 rounded-sm uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(0,255,156,0.2)]"
              >
                {t('contact.send')}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        <div className="mt-32 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest font-bold">
          <div>© 2026 Mohamed Doukkar • All Rights Reserved</div>
          <div>Built with React, Motion & Tailwind</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
}
