import React from 'react';
import { motion } from 'framer-motion';

const TopTicker: React.FC = () => {
  const tickerContent = [
    { label: 'Downloads', value: '3\'155' },
    { label: 'Aktive Mitglieder', value: '2\'590' },
    { label: 'Aktive Brands', value: '127' }
  ];

  // Create duplicated content for seamless loop
  const fullContent = [...tickerContent, ...tickerContent];

  return (
    <div className="w-full bg-[#ffeded] py-3 overflow-hidden relative z-50 border-b border-[#e01d1f]/10">
      <div className="relative flex">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 10
            }}
            className="flex-shrink-0 flex items-center whitespace-nowrap px-4"
          >
            {fullContent.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center text-[1.2rem] font-medium tracking-wide text-[#e01d1f] mx-12"
              >
                {item.label}: <span className="font-bold ml-2">{item.value}</span>
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopTicker;