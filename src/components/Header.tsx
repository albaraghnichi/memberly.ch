import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
   const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Navigate home, then wait for DOM update and scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // small delay to wait for HomePage render
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };
  
  // Enhanced shadow effect on scroll
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 4px 20px rgba(0, 0, 0, 0.08)', '0 8px 30px rgba(0, 0, 0, 0.12)']
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-6xl"
        style={{
          boxShadow,
        }}
      >
        <div className="bg-white rounded-2xl border border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <motion.a 
              href="#" 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/Screenshot 2025-06-04 233456.png" 
                alt="Memberly Logo" 
                className="h-8"
              />
            </motion.a>

            {/* Center: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              <motion.button
                onClick={() => scrollToSection('about')}
                className="text-secondary/80 hover:text-secondary text-sm font-medium transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.about')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e01d1f] transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('features')}
                className="text-secondary/80 hover:text-secondary text-sm font-medium transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.features')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e01d1f] transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('pricing')}
                className="text-secondary/80 hover:text-secondary text-sm font-medium transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.pricing')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e01d1f] transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('partners')}
                className="text-secondary/80 hover:text-secondary text-sm font-medium transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e01d1f] transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            </nav>

            {/* Right: Language Switcher and CTA Button */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>

              {/* CTA Button (Desktop) */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="hidden lg:block bg-[#e01d1f] hover:bg-[#b31718] text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(224, 29, 31, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.contact')}
              </motion.button>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                <div className="md:hidden">
                  <LanguageSwitcher />
                </div>
                <motion.button
                  className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-secondary"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatedMobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnimatedMobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    onClose();
  };
  
  return (
    <motion.div
      className={`fixed inset-0 bg-white z-30 flex flex-col pt-32 px-6 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="flex flex-col space-y-8 items-center justify-center h-full">
        <motion.button
          onClick={() => scrollToSection('about')}
          className="text-2xl font-medium text-secondary/80 hover:text-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('nav.about')}
        </motion.button>
        
        <motion.button
          onClick={() => scrollToSection('features')}
          className="text-2xl font-medium text-secondary/80 hover:text-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('nav.features')}
        </motion.button>
        
        <motion.button
          onClick={() => scrollToSection('pricing')}
          className="text-2xl font-medium text-secondary/80 hover:text-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('nav.pricing')}
        </motion.button>
        
        <motion.button
          onClick={() => scrollToSection('partners')}
          className="text-2xl font-medium text-secondary/80 hover:text-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Partner
        </motion.button>
        
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="bg-[#e01d1f] hover:bg-[#b31718] text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('nav.contact')}
        </motion.button>
      </nav>
    </motion.div>
  );
};

export default Header;
