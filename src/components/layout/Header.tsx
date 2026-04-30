import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#work' },
    { name: t('nav.blog'), href: 'https://techwithmohamed.com' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <span className="font-display font-bold text-xl tracking-tighter text-glow text-primary">
              MOHAMED<span className="text-white">.DOUKKAR</span>
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 ml-6 pl-6 border-l border-white/5 items-center">
              <LanguageSwitcher />
              <motion.a 
                whileHover={{ y: -2, color: '#FFFFFF' }}
                href="https://github.com/doukkar2018" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-500 transition-colors"
              >
                <Github size={16} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, color: '#FFFFFF' }}
                href="https://ma.linkedin.com/in/mohamed-doukkar/fr" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-500 transition-colors"
              >
                <Linkedin size={16} />
              </motion.a>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-bg border-b border-dark-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-dark-surface rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
