import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CreditCard, 
  Award, 
  Paintbrush, 
  DollarSign, 
  Bell, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const Features: React.FC = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: Feature[] = [
    {
      icon: <CreditCard size={24} />,
      title: "Digitale Mitgliedskarten",
      description: "Erstelle öffentliche oder private Mitgliedschaften mit nur wenigen Klicks.",
      details: [
        "Unbegrenzte Mitgliedskarten",
        "QR-Code Integration",
        "Digitale Stempelkarten",
        "Individuelle Designs"
      ]
    },
    {
      icon: <Award size={24} />,
      title: "Punkte- & Belohnungssystem",
      description: "Deine Kunden sammeln automatisch Punkte – du entscheidest, wie sie belohnt werden.",
      details: [
        "Flexibles Punktesystem",
        "Automatische Belohnungen",
        "Punktehistorie",
        "Einlösbare Prämien"
      ]
    },
    {
      icon: <Paintbrush size={24} />,
      title: "Branding & Anpassung",
      description: "Gestalte deine App im Look deiner Marke – Farben, Texte & Logos inklusive.",
      details: [
        "Individuelles Branding",
        "Logo-Integration",
        "Farbschema-Anpassung",
        "Custom Content"
      ]
    },
    {
      icon: <DollarSign size={24} />,
      title: "Monetarisierung & Abo-Modelle",
      description: "Verlange Geld für Premium-Zugänge, Mitgliedschaften oder exklusive Inhalte.",
      details: [
        "Flexible Preismodelle",
        "Abo-Management",
        "In-App Käufe",
        "Zahlungsabwicklung"
      ]
    },
    {
      icon: <Bell size={24} />,
      title: "Push-Notifications",
      description: "Kommuniziere mit deinen Mitgliedern direkt über die App.",
      details: [
        "Gezielte Benachrichtigungen",
        "Event-Reminder",
        "Automatische Updates",
        "Engagement-Tracking"
      ]
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "DSGVO-Tools",
      description: "Alle Funktionen entsprechen den strengen Datenschutzvorschriften.",
      details: [
        "Datenschutz-Dashboard",
        "Consent-Management",
        "Datenexport",
        "Sichere Speicherung"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-light-gray relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(224,29,31,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(224,29,31,0.05)_0%,_transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary">Funktionen</h2>
          <p className="section-subtitle">Alles was du brauchst, um deine Kunden zu begeistern</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <motion.div
                className={`h-full p-6 rounded-2xl bg-white backdrop-blur-lg border border-gray-100 shadow-lg 
                  ${activeFeature === index ? 'shadow-primary/20' : 'shadow-gray-100/50'}
                  transition-all duration-300 hover:border-primary/20`}
                whileHover={{ y: -5 }}
              >
                {/* Icon with animated background */}
                <div className="relative mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center
                    ${activeFeature === index ? 'animate-pulse' : ''}`}>
                    <motion.div
                      className="text-primary"
                      animate={activeFeature === index ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-secondary/70 mb-4">{feature.description}</p>

                {/* Expandable details */}
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mt-4 border-t border-gray-100 pt-4">
                        {feature.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center text-sm text-secondary/70"
                          >
                            <ChevronRight size={16} className="text-primary mr-2" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;