import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

// TikTok SVG Icon Component
const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface FooterProps {
  onShowDatenschutz?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowDatenschutz }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {t('footer.navigation.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {t('footer.navigation.features')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {t('footer.navigation.pricing')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {t('footer.navigation.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {t('footer.navigation.contact')}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Legal Links and Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/agb" className="text-white/70 hover:text-white text-sm transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <button
                  onClick={onShowDatenschutz}
                  className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  Datenschutz
                </button>
              </li>
              <li className="pt-4">
                <h4 className="text-sm font-medium text-white mb-3">Folge uns</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/memberlyapp.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-white text-sm transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </motion.a>
                  <motion.a
                    href="https://www.tiktok.com/@memberly.app?_t=ZN-8x9VEm3B0Pm&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-white text-sm transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TikTokIcon size={20} />
                    <span>TikTok</span>
                  </motion.a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;