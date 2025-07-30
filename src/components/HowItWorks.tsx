import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'App starten',
    description: 'Starte in Sekunden – keine komplizierte Einrichtung nötig.',
    image: '/Screenshot 2025-06-05 014127.png'
  },
  {
    number: '02',
    title: 'Marke wählen',
    description: 'Entdecke deine Lieblingsbrand und werde Teil ihrer Community.',
    image: '/Screenshot 2025-06-05 014137.png'
  },
  {
    number: '03',
    title: 'Punkte sammeln',
    description: 'Bei jedem Besuch oder Einkauf Punkte sammeln.',
    image: '/Screenshot 2025-06-05 014144.png'
  },
  {
    number: '04',
    title: 'Belohnungen',
    description: 'Tausche Punkte gegen attraktive Prämien ein.',
    image: '/Screenshot 2025-06-05 014200.png'
  }
];

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(224,29,31,0.05)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(224,29,31,0.03)_0%,_transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Wie funktioniert Memberly?
          </h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            In wenigen Schritten zu deiner digitalen Mitgliedschaft
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="text-4xl font-bold text-primary/20 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary/70 text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>

              <motion.div 
                className="relative w-full max-w-[280px] mx-auto"
                whileHover={{ 
                  scale: 1.03,
                  transition: { 
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-xl bg-white">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  <div className="absolute inset-0 border border-black/5 rounded-2xl" />
                </div>
                
                {/* Decorative shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-[10px] bg-black/5 blur-xl rounded-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;