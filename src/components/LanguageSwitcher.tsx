import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 border border-dark-border rounded-full text-xs font-mono text-gray-400 hover:text-white hover:border-primary/50 transition-all bg-dark-bg/50"
      >
        <Globe size={14} className="text-primary" />
        <span className="uppercase">{currentLanguage.code}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className={`absolute z-50 mt-2 w-40 bg-dark-surface border border-dark-border rounded-xl shadow-2xl p-1 overflow-hidden ${
                i18n.language === 'ar' ? 'left-0' : 'right-0'
              }`}
            >
              <div className="py-1 px-2 border-b border-dark-border mb-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">Select Language</span>
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors ${
                    i18n.language === lang.code 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-400 hover:bg-dark-bg hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                  {i18n.language === lang.code && <Check size={12} />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
