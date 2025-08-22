import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUp } from 'lucide-react';
import { useNavigate } from "react-router-dom";


interface DatenschutzProps {
  isVisible: boolean;
  onClose?: () => void;
}

const Datenschutz: React.FC<DatenschutzProps> = ({ isVisible, onClose }) => {
    const navigate = useNavigate();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (onClose) {
      onClose();
    }
  };

  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <AnimatePresence>
      {/*      {isVisible && (  */}
        <motion.section 
          id="datenschutz" 
          className="py-24 bg-white relative overflow-hidden mt-[70px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Back to Top Button at the top */}
              <div className="mb-8 text-center">
                <motion.button
                  onClick={goHome}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(224, 29, 31, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp size={20} className="mr-2" />
                  Zurück zur Startseite
                </motion.button>
              </div>

              <h1 className="text-4xl font-bold text-primary mb-2">Datenschutzrichtlinie</h1>
              <p className="text-sm text-secondary/70 mb-8">Fassung vom August 2024</p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">1. Einleitung</h2>
                <p className="mb-4">Die Memberly AG ("Memberly", "wir", "uns" oder "unser") nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzrichtlinie beschreibt, wie wir personenbezogene Daten erheben, verwenden, weitergeben und schützen, wenn Sie unsere Kundenloyalisierungs-App ("App") nutzen, sowie Ihre Rechte in Bezug auf diese Daten. Diese Richtlinie basiert auf den geltenden Datenschutzgesetzen in der Schweiz, insbesondere dem Bundesgesetz über den Datenschutz (DSG) und der Datenschutz-Grundverordnung der Europäischen Union (DSGVO), soweit diese Anwendung findet.</p>
                <p className="mb-4">Die Vertragssprache ist Deutsch. Versionen dieser Datenschutzrichtlinien in anderen Sprachen dienen lediglich der Orientierung. Massgeblich ist ausschliesslich die deutsche Fassung.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">2. Verantwortlicher</h2>
                <p className="mb-4">Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:</p>
                <p className="mb-4">Memberly AG<br />support@memberly.ch</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">3. Erhobene Daten</h2>
                <p className="mb-4">Wir erheben personenbezogene Daten, die für die Bereitstellung unserer Dienste notwendig sind. Diese können umfassen:</p>
                <ul className="mb-4 list-disc pl-6">
                  <li>Stammdaten: Vorname, Nachname, Geburtsdatum, Geschlecht</li>
                  <li>Kontaktinformationen: E-Mail-Adresse, Telefonnummer, Postanschrift</li>
                  <li>Nutzungsdaten: Informationen über Ihre Interaktionen mit der App, z. B. besuchte Seiten, getätigte Transaktionen und eingesetzte Treuepunkte</li>
                  <li>Technische Daten: IP-Adresse, Gerätetyp, Betriebssystem, App-Version</li>
                  <li>Kundenvorlieben: Informationen über Ihre Präferenzen und Interessen, die Sie uns mitteilen oder die aus Ihrem Nutzungsverhalten abgeleitet werden</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">4. Zweck der Datenverarbeitung</h2>
                <p className="mb-4">Die erhobenen Daten verwenden wir zu folgenden Zwecken:</p>
                <ul className="mb-4 list-disc pl-6">
                  <li>Bereitstellung und Verwaltung der App sowie der damit verbundenen Dienste</li>
                  <li>Personalisierung der Benutzererfahrung und Angebot massgeschneiderter Dienstleistungen</li>
                  <li>Verwaltung und Abwicklung von Treueprogrammen und Kundenbindungsmassnahmen</li>
                  <li>Kommunikation mit Ihnen über Updates, Angebote oder andere relevante Informationen</li>
                  <li>Verbesserung unserer Produkte und Dienstleistungen durch Analyse von Nutzungsdaten</li>
                  <li>Erfüllung gesetzlicher Verpflichtungen und Durchsetzung unserer Nutzungsbedingungen</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">5. Rechtsgrundlagen der Datenverarbeitung</h2>
                <p className="mb-4">Die Verarbeitung Ihrer personenbezogenen Daten stützt sich auf folgende Rechtsgrundlagen:</p>
                <ul className="mb-4 list-disc pl-6">
                  <li>Vertragserfüllung: Die Verarbeitung ist erforderlich, um den Vertrag zwischen Ihnen und der Memberly AG zu erfüllen.</li>
                  <li>Einwilligung: Soweit erforderlich, verarbeiten wir Ihre Daten auf Basis Ihrer Einwilligung, die Sie jederzeit widerrufen können.</li>
                  <li>Rechtliche Verpflichtungen: Wir verarbeiten Ihre Daten, um gesetzlichen Verpflichtungen nachzukommen.</li>
                  <li>Berechtigtes Interesse: In einigen Fällen verarbeiten wir Ihre Daten auf Grundlage unseres berechtigten Interesses, insbesondere zur Verbesserung unserer Dienstleistungen und zur Kommunikation mit Ihnen.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">6. Weitergabe von Daten an Dritte</h2>
                <p className="mb-4">Ihre personenbezogenen Daten werden nur dann an Dritte weitergegeben, wenn dies zur Erfüllung der oben genannten Zwecke erforderlich ist, insbesondere an:</p>
                <ul className="mb-4 list-disc pl-6">
                  <li>Dienstleister, die uns bei der Bereitstellung der App unterstützen (z.B. Hosting-Anbieter, Zahlungsdienstleister)</li>
                  <li>Geschäftspartner, wenn dies zur Erfüllung von Treueprogrammen notwendig ist</li>
                  <li>Behörden, wenn wir gesetzlich dazu verpflichtet sind</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">7. Datenübermittlung ins Ausland</h2>
                <p className="mb-4">Falls wir Ihre Daten in Länder ausserhalb der Schweiz oder des Europäischen Wirtschaftsraums (EWR) übermitteln, stellen wir sicher, dass geeignete Schutzmassnahmen getroffen werden, z. B. durch den Abschluss von Standardvertragsklauseln oder auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">8. Datensicherheit</h2>
                <p className="mb-4">Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Dazu gehören Verschlüsselungstechnologien und Zugriffsrechte auf unsere Systeme, die auf das notwendige Minimum beschränkt sind.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">9. Speicherdauer</h2>
                <p className="mb-4">Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die Erfüllung der in dieser Richtlinie genannten Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist. Nach Ablauf dieser Fristen werden Ihre Daten sicher gelöscht oder anonymisiert.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">10. Ihre Rechte</h2>
                <p className="mb-4">Sie haben das Recht:</p>
                <ul className="mb-4 list-disc pl-6">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung unrichtiger oder unvollständiger Daten zu verlangen</li>
                  <li>Löschung Ihrer Daten zu verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
                  <li>Einschränkung der Verarbeitung Ihrer Daten zu verlangen</li>
                  <li>Widerspruch gegen die Datenverarbeitung einzulegen, insbesondere gegen die Verarbeitung auf Grundlage eines berechtigten Interesses</li>
                  <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Datenportabilität)</li>
                  <li>Ihre Einwilligung jederzeit zu widerrufen, ohne dass dies die Rechtmässigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt</li>
                </ul>
                <p className="mb-4">Zur Ausübung Ihrer Rechte können Sie uns über die oben genannten Kontaktdaten erreichen.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">11. Änderungen der Datenschutzrichtlinie</h2>
                <p className="mb-4">Wir behalten uns das Recht vor, diese Datenschutzrichtlinie jederzeit zu ändern. Die jeweils aktuelle Version ist in der App und auf unserer Website verfügbar. Wesentliche Änderungen werden wir Ihnen in geeigneter Weise mitteilen.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">12. Kontakt</h2>
                <p className="mb-4">Bei Fragen zu dieser Datenschutzrichtlinie oder zur Verarbeitung Ihrer personenbezogenen Daten können Sie uns jederzeit unter den oben genannten Kontaktdaten erreichen.</p>
              </section>

              {/* Back to Top Button at the bottom */}
              <div className="text-center pt-8 border-t border-gray-200">
                <motion.button
                  onClick={scrollToTop}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(224, 29, 31, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp size={20} className="mr-2" />
                  Zurück zur Startseite
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      {/*    )} */}
    </AnimatePresence>
  );
};

export default Datenschutz;
