import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AGB: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Zurück zur Startseite
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-2">Allgemeine Geschäftsbedingungen der Memberly AG</h1>
          <p className="text-sm text-secondary/70 mb-8">Fassung vom August 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">1. VERTRAGSPARTEIEN, GELTUNGSBEREICH:</h2>
            <p className="mb-4">1.1. Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") regeln – gemeinsam mit dem schriftlichen Auftrag – die vertragliche Beziehung zwischen der Memberly AG (nachfolgend „Memberly") und jener natürlichen oder juristischen Person, die Memberly mit der Erbringung der hier vertragsgegenständlichen Dienstleistungen beauftragt (nachfolgend der „Kunde").</p>
            <p className="mb-4">1.2. Der Kunde erklärt, Unternehmer im Sinne des Schweizer Obligationenrechts (OR) zu sein; Memberly erbringt die hier vertragsgegenständlichen Leistungen ausschliesslich gegenüber Unternehmern.</p>
            <p className="mb-4">1.3. Dem Vertragsverhältnis zwischen Memberly und dem Kunden liegen ausschliesslich diese AGB und allfällige schriftliche Einzelvereinbarungen, insbesondere der schriftliche Auftrag (samt seiner Anhänge) zugrunde (nachfolgend das „Vertragsverhältnis"); allfällige mündliche Nebenabreden haben keine Wirksamkeit.</p>
            <p className="mb-4">1.4. Abweichende Geschäftsbedingungen des Kunden gelten nur, wenn Memberly diesen Bedingungen im Vorhinein ausdrücklich und schriftlich zustimmt.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">2. ABRUFBARKEIT, ÄNDERUNGSVORBEHALT:</h2>
            <p className="mb-4">2.1. Die AGB sind in der jeweils aktuellen Fassung auf der Website von Memberly abrufbar. Memberly übergibt oder übersendet die AGB anlässlich des Vertragsabschlusses und bei Änderungen an den Kunden.</p>
            <p className="mb-4">2.2. Memberly ist berechtigt, diese AGB jederzeit zu ändern, um diese an geänderte technische oder wirtschaftliche Rahmenbedingungen anzupassen. Memberly teilt dem Kunden alle Änderungen der AGB sowie den Zeitpunkt deren Inkrafttretens per E-Mail oder über das Benutzerkonto des Kunden mit. Die geänderten AGB erlangen Wirksamkeit, wenn der Kunde der Änderung nicht binnen spätestens 4 Wochen ab Zugang der Mitteilung über die Änderung per E-Mail an support@memberly.ch widerspricht. Im Falle eines Widerspruchs ist Memberly zur ausserordentlichen Kündigung des Vertragsverhältnisses gemäss Punkt 12.3 berechtigt. Memberly wird den Kunden im Rahmen der Mitteilung über eine Änderung auf die Bedeutung seines Verhaltens besonders hinweisen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">3. VERTRAGSGEGENSTAND:</h2>
            <p className="mb-4">3.1. Memberly entwickelt für seine Kunden digitale Lösungen zur Kundenbindung. Diese digitalen Lösungen können etwa in Form einer Smartphone-App oder webbasierten Anwendungen umgesetzt werden und auch eine zentrale, webbasierte Kunden- und Kampagnenverwaltung (Customer Loyalty Management, CLM) beinhalten (nachfolgend die „Softwarelösung").</p>
            <p className="mb-4">3.2. Die Softwarelösung wird auf Basis einer bestehenden Server-Software für jeden Kunden nach dessen Vorgaben zunächst individuell konfiguriert oder entwickelt und in weiterer Folge für die Dauer der Vertragslaufzeit als Service-Dienstleistung im Rahmen einer Cloud-Anwendung zur Verfügung gestellt (SaaS).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">4. VERTRAGSABSCHLUSS:</h2>
            <p className="mb-4">Das Vertragsverhältnis zwischen dem Kunden und Memberly kommt im Zeitpunkt des Abschlusses einer schriftlichen Einzelvereinbarung über die zu erbringenden Dienstleistungen sowie kommerziellen Rahmenbedingungen zustande (nachfolgend der „Auftrag"). Dessen ungeachtet steht Memberly für allfällige Leistungen noch vor Unterfertigung des Auftrags eine angemessene und branchenübliche Entlohnung zu, soweit der Umfang dieser Leistungen den Umfang der sonst üblichen Aufwendungen bei der Anbahnung einer Geschäftsbeziehung deutlich übersteigt.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">5. SOFTWAREENTWICKLUNG, MITWIRKUNGSPFLICHT, ABNAHME:</h2>
            <p className="mb-4">5.1. Memberly erstellt auf Basis der Informationen und Materialien des Kunden ein schriftliches Konzept, das den Aufbau, die Struktur und die Funktionalität der Softwarelösung (Funktionen, Inhalte, grafische Merkmale, Interaktionsmöglichkeiten für den Nutzer, Schnittstellen mit sozialen Medien, etc.) zumindest in groben Zügen abbildet (nachfolgend die „Softwarebeschreibung").</p>
            <p className="mb-4">5.2. Memberly legt die ausgearbeitete Softwarebeschreibung dem Kunden zur Prüfung und Freigabe vor. Die Parteien werden die Softwarebeschreibung gemeinsam, soweit erforderlich, überarbeiten und adaptieren. Der Kunde hat seine Wünsche und Vorstellungen in Bezug auf die Gestaltung der Softwarelösung rechtzeitig und klar zu kommunizieren.</p>
            <p className="mb-4">5.3. Die Softwarelösung wird von Memberly in weiterer Folge nach den Vorgaben in der Softwarebeschreibung programmiert und umgesetzt. Der Kunde wird die Entwicklung und Umsetzung der Softwarelösung zu jeder Zeit durch aktive und angemessene Mitwirkungshandlungen nach besten Kräften fördern und unterstützen. Insbesondere ist dem Kunden bewusst, dass die erfolgreiche und rechtzeitige Fertigstellung der Softwarelösung ganz wesentlich von der zeitgerechten Bereitstellung aller dafür notwendigen Informationen und Ressourcen – einschliesslich Personalressourcen – abhängt. Diesbezüglich vertraut Memberly auf die Richtigkeit und Vollständigkeit der durch den Kunden bereitgestellten Informationen und Materialien, insbesondere jener für die Erarbeitung der Softwarebeschreibung. Der Kunde hat die ihm zur Freigabe vorgelegten Arbeitsergebnisse gewissenhaft zu prüfen und allfällige Mängel sofort zu rügen. Die Erfüllung dieser Mitwirkungspflichten durch den Kunden erfolgt unentgeltlich.</p>
            <p className="mb-4">5.4. Die Prüfung der Funktionsfähigkeit der Softwarelösung vor dem Go-Live erfolgt im Rahmen der (technischen) Abnahme durch den Kunden. Sofern zwischen den Parteien kein gesondertes Abnahmeverfahren (etwa ein Testverfahren in einer Testumgebung) vereinbart wurde, wird die erfolgreiche Abnahme der Softwarelösung durch den Kunden spätestens in jenem Zeitpunkt angenommen, in dem Memberly den Abschluss der Entwicklungsarbeit schriftlich anzeigt und die Softwarelösung die in der Softwarebeschreibung enthaltenen Anforderungen und Vorgaben im Wesentlichen erfüllt.</p>
            <p className="mb-4">5.5. Nach der Abnahme lädt Memberly die Softwarelösung auf eine gemeinsam mit dem Kunden vorweg festgelegte Verkaufsplattform (Apple Store, Google Playstore) oder stellt sie dem Kunden in einer Testumgebung zur Verfügung (Go-Live).</p>
            <p className="mb-4">5.6. Sofern im Auftrag nicht ausdrücklich abweichend geregelt, wurde kein konkreter Fertigstellungstermin vereinbart. Memberly wird sich aber – stets in Abhängigkeit von der Mitwirkung des Kunden – bemühen, die Softwarelösung innerhalb eines angemessenen Zeitraums fertigzustellen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">6. SOFTWAREÜBERLASSUNG (SAAS):</h2>
            <p className="mb-4">6.1. Memberly stellt dem Kunden nach Massgabe dieser AGB und den Vereinbarungen im Auftrag während der Vertragsdauer die Softwarelösung und den für die vertragsgemässe Nutzung der Softwarelösung benötigten Speicherplatz (Data-Hosting) über das Internet (Cloud-Anwendung) zur Verfügung.</p>
            <p className="mb-4">6.2. Die Softwarelösung wird grundsätzlich von den im Zeitpunkt der Abnahme gängigen Endgeräten unterstützt; Memberly sichert aber nicht zu, dass die Softwarelösung auf sämtlichen auf dem Markt verfügbaren Endgeräten betrieben werden kann.</p>
            <p className="mb-4">6.3. Memberly behält sich die ständige Weiterentwicklung der Softwarelösung sowie der Server-Software bzw. die Optimierung von einzelnen Software-Features vor. Dadurch kann es von Zeit zu Zeit notwendig werden, Updates oder Upgrades zu installieren.</p>
            <p className="mb-4">6.4. Memberly ist dazu berechtigt, die Leistungserbringung vorübergehend zu unterbrechen bzw. einzuschränken und die vertraglich vereinbarten Dienste ganz oder teilweise einzustellen, wenn und soweit dies zur Behebung oder Vermeidung von Störungen, zur Abwehr von Angriffen auf die Netzinfrastruktur (Bugfixes) oder zur Vornahme betriebsnotwendiger Wartungsarbeiten erforderlich ist. Memberly wird den Kunden über länger dauernde Wartungsarbeiten im Voraus informieren.</p>
            <p className="mb-4">6.5. Der Kunde nimmt zur Kenntnis, dass die für die Nutzung der Softwarelösung notwendigen Rechenzentren nicht von Memberly betrieben werden und sich hauptsächlich im Ausland befinden.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">7. BENUTZERKONTO:</h2>
            <p className="mb-4">7.1. Der Kunde erhält ein persönliches Benutzerkonto (Dashboardzugang), über welches auf die Softwarelösung zugegriffen werden kann. Die Anmeldedaten zu diesem Benutzerkonto setzen sich aus der E-Mail-Adresse des Kunden und einem selbst gewählten Passwort zusammen. Diese Anmeldedaten dürfen vom Kunden nicht an Dritte weitergegeben werden und sind vor dem Zugriff unberechtigter Dritter zu schützen.</p>
            <p className="mb-4">7.2. Der Kunde verpflichtet sich, alle im Rahmen der Registrierung des Benutzerkontos abgefragten Angaben richtig und vollständig zu machen. Memberly ist berechtigt – jedoch nicht verpflichtet – Nachweise für die Richtigkeit der angegebenen Daten zu verlangen. Der Kunde verpflichtet sich, sein Benutzerkonto bei jeder Änderung seiner Daten unverzüglich zu aktualisieren.</p>
            <p className="mb-4">7.3. Der Kunde haftet gegenüber Memberly für sämtliche Schäden und Nachteile, die Memberly durch einen unberechtigten Zugriff eines Dritten auf das Benutzerkonto oder aufgrund von unrichtigen Angaben im Benutzerkonto entstehen. Der Kunde verpflichtet sich, Memberly diesbezüglich schadlos zu halten.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">8. VERGÜTUNG, ENTGELTE:</h2>
            <p className="mb-4">8.1. Der Kunde schuldet die für die Entwicklung und die anschliessende Überlassung der Softwarelösung im Auftrag festgelegten einmaligen Vergütungen und wiederkehrenden Entgelte.</p>
            <p className="mb-4">8.2. Sofern keine abweichende Vereinbarung getroffen wurde, sind einmalige Vergütungen – wie etwa der Aufwand für die Entwicklung der Softwarelösung – bei Vertragsabschluss zur Zahlung fällig. Wiederkehrende Entgelte – etwa für die Überlassung der Softwarelösung zur laufenden Nutzung – sind jeweils jährlich im Voraus zur Zahlung fällig.</p>
            <p className="mb-4">8.3. Mit dem Monat, in dem die maximale Anzahl der registrierten Nutzer das nächste Nutzer-Limit überschreitet, kommt automatisch der monatliche Preis des nächst höheren Nutzer-Limits zur Anwendung.</p>
            <p className="mb-4">8.4. Sofern nicht die Zahlung mittels Bankeinzug vereinbart wurde, sind Rechnungen von Memberly innerhalb von 10 Tagen ab Erhalt zur Zahlung fällig.</p>
            <p className="mb-4">8.5. Gerät der Kunde mit der Bezahlung der Entgeltforderungen von Memberly in Verzug, schuldet er Verzugszinsen in der gesetzlichen Höhe gemäss Art. 104 OR (Obligationenrecht). Darüber hinaus hat der Kunde Memberly alle zweckentsprechenden und angemessenen Kosten zu ersetzen, die für das Einschreiten von Inkassoinstituten und Rechtsanwälten anfallen.</p>
            <p className="mb-4">8.6. Für zusätzliche Aufwände, die aus einer Verletzung der Mitwirkungspflichten durch den Kunden – etwa durch die Erteilung unrichtiger oder unvollständiger Informationen – oder aus nachträglichen Änderungs- und Ergänzungswünschen des Kunden resultieren, ist Memberly berechtigt, diese Aufwände auf Basis eines angemessenen und branchenüblichen Stundensatzes abzurechnen. Als nachträglich gelten Änderungs- und Ergänzungswünsche insbesondere dann, wenn sie vom Kunden erst nach der Freigabe der Softwarebeschreibung kommuniziert wurden.</p>
            <p className="mb-4">8.7. Memberly ist berechtigt, die Preise für die Software einseitig anzupassen und wird den Kunden darüber rechtzeitig, jedoch mindestens 1 Monat im Voraus, informieren. Die Preisänderung wird im Fall eines unbefristeten Vertrags mit Beginn der nächsten Abrechnungsperiode, im Fall eines befristeten Vertrags mit Beginn des nächsten Vertragsjahres wirksam.</p>
            <p className="mb-4">8.8. Memberly ist berechtigt, aufgrund der laufenden Produktweiterentwicklung und Verbesserung eine jährliche Preiserhöhung in Form einer Innovation Fee auf die monatlichen Gebühren in Höhe von bis zu 4,5 % durchzuführen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">9. SONSTIGE KUNDENPFLICHTEN:</h2>
            <p className="mb-4">9.1. Der Kunde darf die zur Verfügung gestellte Softwarelösung ausschliesslich im vertraglich vereinbarten Umfang nutzen.</p>
            <p className="mb-4">9.2. Der Kunde ist verpflichtet, bei der Nutzung der Softwarelösung alle anwendbaren Rechtsvorschriften einzuhalten. Er hat insbesondere die Vorschriften des Strafrechts, des Urheber-, Marken- und Wettbewerbsrechts, des Jugendschutzes sowie die Persönlichkeitsrechte anderer zu beachten.</p>
            <p className="mb-4">9.3. Der Kunde verpflichtet sich, keine Daten in die Softwarelösung oder die Serverplattform einzubringen, die einen Virus oder sonstige Malware (Schadsoftware) enthalten und keine Handlungen vorzunehmen, die sich negativ auf die Verfügbarkeit der Serverplattform für andere Kunden auswirken.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">10. SUPPORT:</h2>
            <p className="mb-4">10.1. Ein Fehler in bzw. eine Störung der Softwarelösung liegt vor, wenn die in der Softwarebeschreibung dargestellten Funktionen nicht erfüllt werden (nachfolgend die „Störung").</p>
            <p className="mb-4">10.2. Sofern zwischen den Parteien keine gesonderte Vereinbarung getroffen wurde, wird Memberly auf Support-Anfragen des Kunden in Zusammenhang mit einer Störung binnen einer angemessenen Frist reagieren und diese bearbeiten.</p>
            <p className="mb-4">10.3. Wird Memberly aufgrund einer Support-Anfrage für die Behebung einer nicht von Memberly zu vertretenden Störung in Anspruch genommen, so ist Memberly berechtigt, den Aufwand für die Behebung der Störung nach branchenüblichen Preisen gegenüber dem Kunden gesondert abzurechnen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">11. HÖHERE GEWALT:</h2>
            <p className="mb-4">Führt ein Ereignis höherer Gewalt dazu, dass Memberly seine Verpflichtungen nicht, nicht vollständig, nicht vertragsgemäss oder nicht rechtzeitig erfüllen kann, ist Memberly für die Dauer des Ereignisses der höheren Gewalt von der Erfüllung seiner vertraglichen Verpflichtungen befreit. „Höhere Gewalt" ist ein Ereignis, das für keine der Parteien unter Anwendung äusserster, billigerweise zu erwartender Sorgfalt vorhersehbar war, insbesondere Ereignisse wie Krieg, Aufstand, Unruhen, Embargo, Epidemien, Pandemien, Feuer, Hochwasser, Unwetter, Unterbrechung der Stromversorgung, Arbeitskampf und behördliche Anordnungen als Folge der vorgenannten Ereignisse.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">12. LAUFZEIT, KÜNDIGUNG:</h2>
            <p className="mb-4">12.1. Sofern die Parteien nichts Abweichendes vereinbart haben, wird das Vertragsverhältnis in Bezug auf die Softwareüberlassung (SaaS) (nachfolgend das „Dauerschuldverhältnis") auf unbestimmte Dauer abgeschlossen.</p>
            <p className="mb-4">12.2. Das Dauerschuldverhältnis kann grundsätzlich von jeder Partei zum Ende jedes Kalendermonats unter Einhaltung einer Kündigungsfrist von einem Monat ohne Angabe von Gründen schriftlich gekündigt werden. Allerdings verzichten die Parteien für die Dauer der im Auftrag festgelegten Mindestvertragslaufzeit auf ihr ordentliches Kündigungsrecht. Die Mindestvertragslaufzeit beginnt mit der erstmaligen Verrechnung der monatlichen Gebühren.</p>
            <p className="mb-4">12.3. Unberührt bleibt das Recht der Parteien, das Dauerschuldverhältnis aus wichtigem Grund mit sofortiger Wirkung aufzulösen, also ausserordentlich zu kündigen. Wichtige Gründe, die Memberly zur sofortigen Vertragsauflösung berechtigen, sind insbesondere, aber nicht ausschliesslich, wenn der Kunde:</p>
            <p className="mb-2 ml-4">(i) mit seinen Zahlungsverpflichtungen unter diesem Vertragsverhältnis in Verzug gerät und den offenen Rückstand trotz Mahnung durch Memberly nicht binnen einer Nachfrist von 2 Wochen vollständig ausgleicht;</p>
            <p className="mb-2 ml-4">(ii) die ihm an der Softwarelösung eingeräumten Nutzungsrechte überschreitet – insbesondere, wenn der Kunde durch die Nutzung der Softwarelösung die Sicherheit und Integrität der Serverplattform gefährdet – und dieses Verhalten trotz Mahnung durch Memberly nicht unverzüglich einstellt;</p>
            <p className="mb-2 ml-4">(iii) im Zuge der Nutzung der Softwarelösung schuldhaft gegen gewerbliche Schutz-, Urheber- bzw. sonstige Immaterialgüterrechte Dritter oder sonstige Rechtsvorschriften – einschliesslich der Bestimmungen des Datenschutzrechts – verstösst;</p>
            <p className="mb-2 ml-4">(iv) wissentlich Falschangaben bei der Eröffnung seines Benutzerkontos gemacht hat;</p>
            <p className="mb-2 ml-4">(v) der Aktualisierung dieser AGB gemäss Punkt 2.2 widersprochen hat; oder</p>
            <p className="mb-4 ml-4">(vi) sonst schuldhaft eine wesentliche Pflicht unter dem Vertragsverhältnis verletzt.</p>
            <p className="mb-4">12.4. Mit Ausnahme von Punkt 12.3(v) ist Memberly in den vorgenannten Fällen ausserdem berechtigt, das Benutzerkonto des Kunden ohne Vorankündigung vorläufig zu sperren. Zugleich mit der Sperre wird Memberly den Kunden zur Beseitigung des die Sperre begründenden Sachverhalts binnen angemessener Frist auffordern. Der Kunde ist auch während der Sperre zur Zahlung der vertraglichen Entgelte verpflichtet.</p>
            <p className="mb-4">12.5. Der Kunde nimmt zustimmend zur Kenntnis, dass Memberly bei Beendigung des Vertragsverhältnisses zur Löschung des Benutzerkontos und damit der in Erfüllung des Vertrags gespeicherten und bereitgehaltenen Daten berechtigt ist. Es liegt in der Verantwortung des Kunden, seine Daten rechtzeitig vor Beendigung des Vertragsverhältnisses zu sichern.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">13. GEWÄHRLEISTUNG, HAFTUNG:</h2>
            <p className="mb-4">13.1. Der Kunde ist sich bewusst, dass Softwareprodukte grundsätzlich niemals gänzlich mängelfrei sein können. Memberly gewährleistet daher nur, dass die Softwarelösung im Wesentlichen der ausdrücklich vereinbarten Softwarebeschreibung entspricht. Eine darüberhinausgehende Gewährleistungsverpflichtung wird nicht übernommen; auch nicht für gewöhnlich vorausgesetzte Eigenschaften von Softwareprodukten.</p>
            <p className="mb-4">13.2. Sollte die Softwarelösung mangelhaft sein, hat der Kunde das Recht, von Memberly die Beseitigung der Mängel zu fordern. Gelingt Memberly die Beseitigung des Mangels nicht innerhalb einer angemessenen Frist, so ist der Kunde berechtigt, eine Preisminderung geltend zu machen. Die Geltendmachung anderer gesetzlicher Gewährleistungsbehelfe – insbesondere der Wandelung – ist hingegen ausdrücklich ausgeschlossen.</p>
            <p className="mb-4">13.3. Der Kunde ist verpflichtet, Mängel unverzüglich nach deren Entdeckung schriftlich zu rügen, wobei der Mangel möglichst genau zu beschreiben ist. Die Gewährleistungsansprüche des Kunden verjähren in 12 Monaten ab Abnahme der Softwarelösung.</p>
            <p className="mb-4">13.4. Memberly haftet dem Kunden nur für Schäden, die Memberly oder ihre Hilfspersonen vorsätzlich oder grob fahrlässig verursachen. Dies gilt nicht für Personenschäden und die Haftung nach dem Produkthaftungsgesetz. Soweit gesetzlich zulässig, ist die Haftung für entgangenen Gewinn, Folgeschäden – insbesondere für Schäden als Folge eines allfälligen Datenverlusts – sowie sonstige mittelbare oder indirekte Schäden und reine Vermögensschäden ausgeschlossen. Auch die Haftung für Hilfspersonen wird im gesetzlich zulässigen Umfang ausgeschlossen. Memberly haftet zudem nicht für einen bestimmten geschäftlichen Erfolg oder eine mit dem Einsatz der Softwarelösung verbundene kommerzielle Erwartungshaltung des Kunden.</p>
            <p className="mb-4">13.5. Die in diesem Punkt 13 und in Punkt 14 vorgesehenen Gewährleistungsbehelfe, Haftungen und Freistellungen sind ausgeschlossen, sofern für einen Mangel oder eine Verletzung von Rechten Dritter ein über die vertragsgemässe Nutzung hinausgehendes Verhalten des Kunden oder eine eigenmächtige Veränderung bzw. Bearbeitung der Softwarelösung durch den Kunden ursächlich war.</p>
            <p className="mb-4">13.6. Sofern von Memberly im Rahmen des Vertragsverhältnisses auch Vorlagen oder Muster von Dokumenten zur weiteren Verwendung gegenüber den Nutzern der Softwarelösung (Endusern) bereitgestellt werden, handelt es sich hierbei um blosse Arbeitshilfen, welche eine rechtliche Prüfung der Sach- und Rechtslage keinesfalls ersetzen können. Es wird ausdrücklich empfohlen, Beratungsleistungen durch den eigenen Rechtsbeistand in Anspruch zu nehmen. Memberly übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Rechtmässigkeit dieser Arbeitshilfen und der dort enthaltenen Bestimmungen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">14. FREISTELLUNGSERKLÄRUNGEN:</h2>
            <p className="mb-4">14.1. Memberly sichert zu, dass die von ihr erstellten Inhalte frei von Rechten Dritter sind oder dass sie dem Kunden die für die Nutzung der Softwarelösung erforderlichen Rechte daran einräumen kann. Memberly hat den Kunden von allen Ansprüchen Dritter, die aufgrund einer Verletzung ihrer Rechte durch diese Inhalte geltend gemacht werden, vollumfänglich freizustellen. Dies schliesst die Kosten einer aussergerichtlichen und gerichtlichen Rechtsverfolgung und Rechtsverteidigung mit ein.</p>
            <p className="mb-4">14.2. Der Kunde sichert zu, dass er alle für die Nutzung im Rahmen der gegenständlichen App erforderlichen Rechte (z.B. Urheber-, Leistungsschutz-, Marken-, Persönlichkeitsrechte) an den von ihm bereitgestellten Informationen, Inhalten und Materialien besitzt. Der Kunde hat Memberly von allen Ansprüchen Dritter, die aufgrund einer Verletzung ihrer Rechte durch diese Informationen, Inhalte und Materialien geltend gemacht werden, vollumfänglich freizustellen. Dies schliesst die Kosten einer aussergerichtlichen und gerichtlichen Rechtsverfolgung und Rechtsverteidigung mit ein.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">15. DATENSICHERHEIT, DATENSCHUTZ:</h2>
            <p className="mb-4">15.1. Memberly wird geeignete technische und organisatorische Vorkehrungen zur Vermeidung eines Datenverlusts und zur Verhinderung von unbefugten Zugriffen Dritter auf die Daten des Kunden treffen. Insbesondere erstellt Memberly in regelmässigen Abständen eine Sicherung jener Daten, die durch den Kunden in die Softwarelösung eingegeben und dort gespeichert werden (Backup). Diese Sicherung erfolgt auf anderen Servern als jenen, auf denen die Softwarelösung betrieben wird und ist mehrfach redundant abgesichert. Diese Absicherung bezieht sich auf Systemausfälle.</p>
            <p className="mb-4">15.2. Dessen ungeachtet ist der Kunde verpflichtet, selbst für eine regelmässige Sicherung seiner Daten – etwa durch regelmässige Exports – Sorge zu tragen. Memberly haftet nicht für den Verlust und die Beschädigung von Daten. Der Kunde hat kein Recht, von Memberly die Wiederherstellung von verlorenen oder beschädigten Daten zu verlangen; allfällige Wiederherstellungsmassnahmen liegen im alleinigen Ermessen von Memberly.</p>
            <p className="mb-4">15.3. Soweit Memberly personenbezogene Daten des Kunden verarbeitet, gelten die Bestimmungen der gesonderten Datenschutzerklärung, die als Anhang zum Auftrag Bestandteil ist und zudem unter www.memberly.ch/datenschutz abrufbar ist.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">16. GEHEIMHALTUNGSPFLICHT, REFERENZ, DATENANALYSE:</h2>
            <p className="mb-4">16.1. Der Kunde verpflichtet sich, alle im Rahmen der Vertragserfüllung von Memberly zur Verfügung gestellten Daten, Programme, Unterlagen und Informationen über die Dauer des Vertragsverhältnisses hinaus geheim zu halten und Dritten nicht zugänglich zu machen. Dritten, denen mit Zustimmung von Memberly Zugang zu den genannten Daten, Programmen, Unterlagen und Informationen gewährt wird, sind schriftlich zur Geheimhaltung zu verpflichten.</p>
            <p className="mb-4">16.2. Der Kunde erklärt hiermit seine ausdrückliche Zustimmung, dass Memberly den Kunden als Referenz in seiner Unternehmenskommunikation mit Logo, Namen und Fallbeispielen angibt (Website, Präsentationen, etc.).</p>
            <p className="mb-4">16.3. Ferner räumt der Kunde Memberly hiermit das Recht ein, die Nutzerdaten – ausschliesslich in anonymisierter Form – auch für eigene Zwecke, etwa zu Zwecken der Produktverbesserung bzw. -entwicklung, Forschung oder Big Data Analyse zu verwenden oder einer sonstigen Verwertung zuzuführen; dieses Nutzungsrecht wird Memberly unentgeltlich eingeräumt.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">17. AUFRECHNUNG, ABTRETUNG:</h2>
            <p className="mb-4">17.1. Der Kunde ist nur insoweit zur Aufrechnung gegenüber Forderungen von Memberly aus dem Vertragsverhältnis berechtigt, wenn die Forderungen des Kunden entweder gerichtlich festgestellt oder unstrittig sind.</p>
            <p className="mb-4">17.2. Memberly ist berechtigt, Rechte und Pflichten aus oder im Zusammenhang mit dem Vertragsverhältnis zur Gänze oder zum Teil mit schuldbefreiender Wirkung auf verbundene Unternehmen oder Dritte zu übertragen. Jegliche Übertragung von Rechten und Pflichten aus oder im Zusammenhang mit dem Vertragsverhältnis durch den Kunden bedarf der vorherigen schriftlichen Zustimmung von Memberly.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">18. VERTRAGSSPRACHE, ANWENDBARES RECHT, GERICHTSSTAND:</h2>
            <p className="mb-4">18.1. Die Vertragssprache ist Deutsch. Versionen dieser AGB in anderen Sprachen dienen lediglich der Orientierung. Massgeblich ist ausschliesslich die deutsche Fassung.</p>
            <p className="mb-4">18.2. Das Vertragsverhältnis unterliegt ausschliesslich schweizerischem Recht unter Ausschluss des UN-Kaufrechts und der internationalen Verweisungsnormen, soweit diese auf anderes als auf schweizerisches Recht verweisen.</p>
            <p className="mb-4">18.3. Erfüllungsort ist der Sitz von Memberly. Für sämtliche Streitigkeiten aus und im Zusammenhang mit dem Vertragsverhältnis – einschliesslich der Frage seines wirksamen Zustandekommens und seiner Beendigung – ist ausschliesslich das jeweils sachlich zuständige Gericht am Sitz von Memberly zuständig.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">19. MITTEILUNGEN:</h2>
            <p className="mb-4">Alle Mitteilungen im Zusammenhang mit diesem Vertragsverhältnis sind schriftlich durch die jeweilige Partei oder deren hierzu berechtigten Vertreter abzugeben und an den Empfänger postalisch oder per E-Mail zu übermitteln. Die Erklärungen sind an die im Auftrag angegebenen Kontaktdaten oder an eine von einer Partei zu einem späteren Zeitpunkt aktualisierten Kontaktdaten zu übermitteln.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">20. FORMVORSCHRIFT:</h2>
            <p className="mb-4">Änderungen oder Ergänzungen des Vertragsverhältnisses bedürfen der Schriftform; das gilt auch für die Aufhebung dieses Schriftformerfordernisses.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary mb-4">21. SALVATORISCHE KLAUSEL:</h2>
            <p className="mb-4">Sind oder werden einzelne oder mehrere Bestimmungen dieser AGB unwirksam oder undurchsetzbar, bleiben die übrigen Bestimmungen wirksam und durchsetzbar. Unwirksame oder undurchsetzbare Bestimmungen gelten einvernehmlich durch solche wirksamen und durchsetzbaren Bestimmungen ersetzt, die dem von den Parteien mit der unwirksamen oder undurchsetzbaren Bestimmung angestrebten Zweck möglichst nahekommen. Entsprechendes gilt sinngemäss für allfällige Vertragslücken.</p>
          </section>

          <div className="text-center pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="btn btn-primary inline-flex items-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              Zurück zur Startseite
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AGB;