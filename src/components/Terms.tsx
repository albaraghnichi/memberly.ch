import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h1>Allgemeine Geschäftsbedingungen der Memberly AG</h1>
          <p className="text-sm text-secondary/70">Fassung vom August 2024</p>

          <section>
            <h2>1. VERTRAGSPARTEIEN, GELTUNGSBEREICH:</h2>
            <p>1.1. Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") regeln – gemeinsam mit dem schriftlichen Auftrag – die vertragliche Beziehung zwischen der Memberly AG (nachfolgend „Memberly") und jener natürlichen oder juristischen Person, die Memberly mit der Erbringung der hier vertragsgegenständlichen Dienstleistungen beauftragt (nachfolgend der „Kunde").</p>
            <p>1.2. Der Kunde erklärt, Unternehmer im Sinne des Schweizer Obligationenrechts (OR) zu sein; Memberly erbringt die hier vertragsgegenständlichen Leistungen ausschliesslich gegenüber Unternehmern.</p>
            <p>1.3. Dem Vertragsverhältnis zwischen Memberly und dem Kunden liegen ausschliesslich diese AGB und allfällige schriftliche Einzelvereinbarungen, insbesondere der schriftliche Auftrag (samt seiner Anhänge) zugrunde (nachfolgend das „Vertragsverhältnis"); allfällige mündliche Nebenabreden haben keine Wirksamkeit.</p>
            <p>1.4. Abweichende Geschäftsbedingungen des Kunden gelten nur, wenn Memberly diesen Bedingungen im Vorhinein ausdrücklich und schriftlich zustimmt.</p>
          </section>

          <section>
            <h2>2. ABRUFBARKEIT, ÄNDERUNGSVORBEHALT:</h2>
            <p>2.1. Die AGB sind in der jeweils aktuellen Fassung auf der Website von Memberly abrufbar. Memberly übergibt oder übersendet die AGB anlässlich des Vertragsabschlusses und bei Änderungen an den Kunden.</p>
            <p>2.2. Memberly ist berechtigt, diese AGB jederzeit zu ändern, um diese an geänderte technische oder wirtschaftliche Rahmenbedingungen anzupassen. Memberly teilt dem Kunden alle Änderungen der AGB sowie den Zeitpunkt deren Inkrafttretens per E-Mail oder über das Benutzerkonto des Kunden mit. Die geänderten AGB erlangen Wirksamkeit, wenn der Kunde der Änderung nicht binnen spätestens 4 Wochen ab Zugang der Mitteilung über die Änderung per E-Mail an support@memberly.ch widerspricht. Im Falle eines Widerspruchs ist Memberly zur ausserordentlichen Kündigung des Vertragsverhältnisses gemäss Punkt 12.3 berechtigt. Memberly wird den Kunden im Rahmen der Mitteilung über eine Änderung auf die Bedeutung seines Verhaltens besonders hinweisen.</p>
          </section>

          {/* Continue with all sections... */}

          <section>
            <h2>21. SALVATORISCHE KLAUSEL:</h2>
            <p>Sind oder werden einzelne oder mehrere Bestimmungen dieser AGB unwirksam oder undurchsetzbar, bleiben die übrigen Bestimmungen wirksam und durchsetzbar. Unwirksame oder undurchsetzbare Bestimmungen gelten einvernehmlich durch solche wirksamen und durchsetzbaren Bestimmungen ersetzt, die dem von den Parteien mit der unwirksamen oder undurchsetzbaren Bestimmung angestrebten Zweck möglichst nahekommen. Entsprechendes gilt sinngemäss für allfällige Vertragslücken.</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;