import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.selisebt.memberly";
const IOS_APP_URL = "https://apps.apple.com";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  // Parallax and opacity effects
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleDownload = (platform: 'android' | 'ios') => {
    if (platform === 'android') {
      window.open(ANDROID_APP_URL, '_blank');
    } else {
      window.open(IOS_APP_URL, '_blank');
    }
  };

  const screenshots = [
    '/Screenshot 2025-06-05 014127.png',
    '/Screenshot 2025-06-05 014137.png',
    '/Screenshot 2025-06-05 014144.png'
  ];

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(224,29,31,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(224,29,31,0.05)_0%,_transparent_50%)]"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 pt-12 md:pt-20"
        style={{ opacity }}
      >
        {/* Hero Text */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Memberly – Kundenbindung,<br />
            wie du sie noch nie gesehen hast
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-secondary/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Individuell. Digital. Next Level.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="btn btn-primary min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDownload('android')}
            >
              <Download size={20} className="mr-2" />
              App kostenlos testen
            </motion.button>
            
            <motion.a
              href="#features"
              className="btn btn-outline min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr erfahren
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Screenshots Display */}
        <div className="relative h-[600px] mb-12">
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 w-[280px] md:w-[320px] rounded-[32px] shadow-2xl"
              initial={{ 
                opacity: 0,
                x: (index - 1) * 300,
                y: 100,
                rotateY: 45,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1,
                x: (index - 1) * 160,
                y: 0,
                rotateY: 0,
                scale: 1
              }}
              transition={{
                duration: 1,
                delay: 0.2 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              style={{
                y: index === 1 ? y1 : y2,
                transformOrigin: "center center",
                perspective: "1000px"
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative overflow-hidden rounded-[32px] border-8 border-white bg-white shadow-2xl">
                <img
                  src={src}
                  alt={`Memberly App Screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.a
            href="#features"
            className="text-secondary/50 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
            }}
          >
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;