import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.selisebt.memberly";
const IOS_APP_URL = "https://apps.apple.com/ch/app/memberly-together/id6505063828";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(224,29,31,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(224,29,31,0.05)_0%,_transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-20 relative z-10">
        {/* Hero Text */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Willkommen bei <span className="text-[#e01d1f] font-black">Memberly</span><br />
            Ihre digitale Lösung für starke Kundenbindung
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-secondary/80 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Individuell. Digital. Next Level.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div 
            className="flex justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href={ANDROID_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-[40px] md:h-[50px]"
              />
            </motion.a>
            
            <motion.a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-[40px] md:h-[50px]"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Video Section - Edge-to-Edge Vertical Video */}
        <motion.div 
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Mobile Layout - Full Width Edge-to-Edge */}
          <div className="block md:hidden w-full">
            <div className="max-w-lg mx-auto">
              <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1102236919?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
                  title="IMG_6071">
                </iframe>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Three Column with Center Video */}
          <div className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
            {/* Left Image */}
            <motion.div
              className="w-[240px] lg:w-[280px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img
                src="/app-screenshot-1.jpg"
                alt="Memberly App Screenshot 1"
                className="w-full h-[480px] lg:h-[520px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Center Video - 16:9 Aspect Ratio */}
            <motion.div
              className="w-[320px] lg:w-[360px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div style={{borderRadius:'12px',overflow:'hidden'}}>
                <div style={{padding:'177.78% 0 0 0',position:'relative'}}>
                  <iframe 
                    src="https://player.vimeo.com/video/1102236919?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
                    title="IMG_6071">
                  </iframe>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="w-[240px] lg:w-[280px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img
                src="/app-screenshot-2.jpg"
                alt="Memberly App Screenshot 2"
                className="w-full h-[480px] lg:h-[520px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.a
            href="#about"
            className="text-secondary/50 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2
            }}
          >
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
      
      <script src="https://player.vimeo.com/api/player.js"></script>
    </section>
  );
};

export default Hero;
