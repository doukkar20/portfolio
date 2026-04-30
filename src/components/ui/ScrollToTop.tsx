import { motion, AnimatePresence, useScroll } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 156, 1)', color: '#000' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] p-4 bg-dark-surface/60 backdrop-blur-xl border border-white/10 rounded-sm text-primary shadow-2xl group transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
          <ArrowUp size={20} className="relative z-10" />
          
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-black/40" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-black/40" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
