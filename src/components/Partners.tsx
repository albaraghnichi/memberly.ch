import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  {
    name: 'VIOR Club',
    logo: '/partner-vior-club.png',
    category: 'Club & Events'
  },
  {
    name: 'Al Dente',
    logo: '/partner-al-dente.png',
    category: 'Restaurant'
  },
  {
    name: 'Nexus Events',
    logo: '/partner-nexus-events.png',
    category: 'Event Management'
  },
  {
    name: 'Miami Nightclub',
    logo: '/partner-miami-nightclub.png',
    category: 'Nightlife'
  }
];

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary">Unsere Partner</h2>
          <p className="section-subtitle">Erfolgreiche Unternehmen, die bereits auf Memberly setzen</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-full h-48 bg-black rounded-xl overflow-hidden shadow-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-semibold">{partner.name}</h3>
                <p className="text-sm text-white/80">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;