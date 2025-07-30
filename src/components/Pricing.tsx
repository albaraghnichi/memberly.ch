import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  isOneTime?: boolean;
  index: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  period,
  description,
  isPopular = false,
  isOneTime = false,
  index
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleButtonClick = () => {
    if (isOneTime) {
      // Scroll to contact section for "Jetzt buchen"
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Redirect to Apple App Store for "Jetzt starten"
      window.open('https://apps.apple.com/ch/app/memberly-together/id6505063828', '_blank');
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${
        isPopular ? 'bg-white' : 'bg-white/80'
      } rounded-2xl shadow-lg overflow-hidden`}
      whileHover={{ y: -8, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 text-xs font-bold uppercase rounded-bl-lg flex items-center">
          <Star size={14} className="mr-1" /> Beliebt
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-secondary/70 text-sm mb-4">{description}</p>
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-3xl md:text-4xl font-bold text-primary">{price}</span>
            <span className="text-secondary/70 ml-1">{period}</span>
          </div>
        </div>
        <motion.button
          onClick={handleButtonClick}
          className={`w-full py-3 px-4 rounded-lg font-medium ${
            isPopular ? 
              'bg-primary text-white hover:bg-primary-dark' : 
              'bg-light-gray text-secondary hover:bg-light-dark'
          } transition-all duration-300 cursor-pointer`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isOneTime ? 'Jetzt buchen' : 'Jetzt starten'}
        </motion.button>
      </div>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      title: "Gratis",
      price: "CHF 0",
      period: "/ Monat",
      description: "Kostenloses Starterpaket bis zu 10 Mitglieder. Ideal für kleine Unternehmen, die die Grundlagen der Kundenbindung kennenlernen möchten."
    },
    {
      title: "Basic",
      price: "CHF 39",
      period: "/ Monat",
      description: "Für wachsende Unternehmen: Verwaltet bis zu 100 Mitglieder. Perfekt, wenn Ihr Unternehmen beginnt, eine größere Kundenbasis zu pflegen und zu binden.",
      isPopular: true
    },
    {
      title: "Professional",
      price: "CHF 79",
      period: "/ Monat",
      description: "Erweitertes Paket für Unternehmen: Verwaltet bis zu 300 Mitglieder. Ideal für mittelgrosse Unternehmen, die erweiterte Funktionen und eine größere Kundendatenbank benötigen."
    },
    {
      title: "Enterprise",
      price: "CHF 199",
      period: "/ Monat",
      description: "Unbegrenzte Mitgliederanzahl für maximale Flexibilität. Perfekt für grosse Unternehmen, die eine umfangreiche und skalierbare Kundenbindungsstrategie benötigen."
    }
  ];

  const setupPlan = {
    title: "Setup Support",
    price: "CHF 69",
    period: "einmalig",
    description: "Unterstützung bei der Einrichtung und Anpassung der App. Wir helfen Ihnen, Memberly perfekt auf Ihr Unternehmen und Ihre Marke abzustimmen.",
    isOneTime: true
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-b from-light-gray to-transparent"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/5 rounded-full"></div>
        <div className="absolute top-40 right-10 w-60 h-60 bg-accent/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary">Preise</h2>
          <p className="section-subtitle">Wähle den perfekten Plan für dein Unternehmen</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              {...plan}
              index={index}
            />
          ))}
          <PricingPlan
            {...setupPlan}
            index={plans.length}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-secondary/70 mt-12"
        >
          Noch unsicher? Starte kostenlos und entdecke Memberly ohne Risiko.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-secondary/70 mt-4"
        >
          👉 Bei Fragen zu den Paketen <a href="#contact" className="text-primary hover:text-primary-dark">kontaktiere uns</a>.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;