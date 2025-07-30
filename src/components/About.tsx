import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(224,29,31,0.05)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(224,29,31,0.03)_0%,_transparent_50%)]"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="flex-1"
          >
            <motion.h2 
              className="text-[2.25rem] font-semibold text-[#d22630] mb-8"
              variants={itemVariants}
            >
              Über uns
            </motion.h2>

            <motion.div 
              className="prose prose-lg text-secondary/80 mb-8"
              variants={itemVariants}
            >
              <p className="leading-relaxed">
                Willkommen bei Memberly – der einfachsten und effizientesten Lösung für Ihre Kundenbindung! Wir haben eine benutzerfreundliche App entwickelt, die es Ihnen ermöglicht, in kürzester Zeit Ihre eigene personalisierte Loyalty Member App zu erstellen. Egal ob Sie ein kleines Geschäft oder ein großes Unternehmen führen, Memberly hilft Ihnen, Ihre Kunden zu belohnen, zu binden und zu begeistern.
              </p>
              <p className="leading-relaxed">
                Wir glauben, dass starke Kundenbeziehungen der Schlüssel zum Geschäftserfolg sind, und genau dort setzen wir an: Wir bieten Ihnen die Tools, um die Loyalität Ihrer Kunden zu stärken und Ihr Business nachhaltig zu fördern.
              </p>
              <p className="leading-relaxed">
                Why Memberly? – Weil Sie Ihre Kunden lieben sollten. Und mit Memberly können Sie Ihre Kundenbindung revolutionieren.
              </p>
              <p className="leading-relaxed">
                Wir sind ein junges, kreatives Team mit Sitz in der Schweiz und streben danach, innovative Lösungen zu entwickeln, die es Unternehmen weltweit ermöglichen, die Beziehung zu ihren Kunden auf eine neue Ebene zu heben. Mit Leidenschaft und frischen Ideen arbeiten wir daran, Ihnen die beste App und einen außergewöhnlichen Service zu bieten – immer mit dem Ziel, Ihr Business durch starke Kundenbindung zu unterstützen.
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-[420px] flex-shrink-0"
          >
            <div className="relative">
              <img
                src="/team-meeting.jpg"
                alt="Memberly Team Meeting"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;