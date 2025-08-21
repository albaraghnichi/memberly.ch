import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.selisebt.memberly";
const IOS_APP_URL = "https://apps.apple.com/us/app/memberly-together/id6505063828";

// Apple Logo SVG Component
const AppleLogo: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// Android Logo SVG Component
const AndroidLogo: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5046C15.5889 8.2231 13.8375 7.8098 12 7.8098s-3.5889.4133-5.1525 1.0316L4.8252 5.3368a.4161.4161 0 00-.5972-.1518.416.416 0 00-.1518.5972l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
  </svg>
);

interface DownloadPopupProps {
  delay?: number;
}

const DownloadPopup: React.FC<DownloadPopupProps> = ({ delay = 5000 }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsOpen(true);
        setHasBeenShown(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, hasBeenShown]);

  useEffect(() => {
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasBeenShown) {
        setIsOpen(true);
        setHasBeenShown(true);
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    
    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [hasBeenShown]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('.download-popup-content') === null && 
          (e.target as HTMLElement).closest('.download-popup-close') === null) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleDownload = (platform: 'android' | 'ios') => {
    if (platform === 'android') {
      window.open(ANDROID_APP_URL, '_blank');
    } else {
      window.open(IOS_APP_URL, '_blank');
    }
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="download-popup-content bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button 
                className="download-popup-close absolute top-4 right-4 text-secondary/50 hover:text-secondary z-10"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
              
              <div className="p-6 pt-10 pb-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  {t('popup.title')}
                </h3>
                <p className="text-secondary/70 mb-6">
                  {t('popup.subtitle')}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    onClick={() => handleDownload('android')}
                    className="btn bg-secondary text-white flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AndroidLogo size={20} className="mr-2 text-[#3DDC84]" />
                    {t('download.platforms.android')}
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleDownload('ios')}
                    className="btn bg-primary text-white flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AppleLogo size={20} className="mr-2" />
                    {t('download.platforms.ios')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-white"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 20px rgba(224, 29, 31, 0.3)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Download size={24} />
        </motion.button>
      </motion.div>
    </>
  );
};

export default DownloadPopup;
