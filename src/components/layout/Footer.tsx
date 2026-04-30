import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="py-20 border-t border-white/5 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-display font-bold text-2xl tracking-tighter text-glow text-primary mb-6 block">
              MOHAMED<span className="text-white">.DOUKKAR</span>
            </span>
            <p className="text-gray-500 font-light max-w-sm leading-relaxed mb-8">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/doukkar20" },
                { icon: Linkedin, href: "https://ma.linkedin.com/in/mohamed-doukkar/fr" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:doukkar2018@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: '#00FF9C' }}
                  className="p-3 bg-dark-surface border border-white/5 rounded-sm text-gray-500 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-sm text-gray-500 hover:text-primary transition-colors uppercase tracking-widest font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Status</h4>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Available for hire</span>
            </div>
            <div className="mt-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest leading-loose">
              LATENCY: 24MS<br />
              REGION: ME-CENTRAL-1<br />
              V_STABLE: 2.4.0
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            © 2024 MOHAMED DOUKKAR. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex gap-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">Neural Assets</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
