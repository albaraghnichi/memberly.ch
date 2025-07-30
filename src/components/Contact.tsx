import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, Shield, CheckCircle, AlertCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: checked }));
  };

  const validateForm = () => {
    if (!formState.name.trim()) {
      setErrorMessage('Bitte geben Sie Ihren Namen ein.');
      return false;
    }
    if (!formState.email.trim()) {
      setErrorMessage('Bitte geben Sie Ihre E-Mail-Adresse ein.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return false;
    }
    if (!formState.message.trim()) {
      setErrorMessage('Bitte geben Sie eine Nachricht ein.');
      return false;
    }
    if (!formState.privacy) {
      setErrorMessage('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('company', formState.company);
      formData.append('email', formState.email);
      formData.append('message', formState.message);

      const response = await fetch('https://formspree.io/f/xdkzgpjd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          company: '',
          email: '',
          message: '',
          privacy: false
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 right-0 w-72 h-72 bg-primary/5 rounded-full"></div>
        <div className="absolute top-20 left-0 w-60 h-60 bg-accent/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary">Kontakt</h2>
          <p className="section-subtitle">Wie können wir dir helfen?</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <Mail size={24} />
              </div>
            </div>

            {/* Contact Information Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email Info */}
                <div className="flex items-center bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary text-sm">E-Mail</h4>
                    <a 
                      href="mailto:diego.digiacomo@memberly.ch"
                      className="text-secondary/70 text-sm hover:text-primary transition-colors"
                    >
                      diego.digiacomo@memberly.ch
                    </a>
                  </div>
                </div>

                {/* Address Info */}
                <div className="flex items-center bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary text-sm">Hauptsitz</h4>
                    <p className="text-secondary/70 text-sm">Thurgauerstrasse 117, 8152 Zürich</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Nachricht gesendet!</h3>
                <p className="text-secondary/70 mb-6">Vielen Dank für deine Nachricht. Wir melden uns in Kürze bei dir.</p>
                <motion.button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn bg-gray-100 text-secondary hover:bg-gray-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Neue Nachricht senden
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                  >
                    <AlertCircle size={20} className="text-red-600 mr-2 flex-shrink-0" />
                    <span className="text-red-700 text-sm">{errorMessage}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary/70 mb-2">
                      Dein Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary/70 mb-2">
                      Firma (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-secondary/70 mb-2">
                    Deine E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="ihre.email@beispiel.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary/70 mb-2">
                    Deine Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <div className="mb-8">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formState.privacy}
                      onChange={handleCheckboxChange}
                      required
                      className="w-5 h-5 text-primary focus:ring-primary rounded border-gray-300 transition mt-0.5 mr-3"
                    />
                    <span className="text-sm text-secondary/70 leading-relaxed">
                      <Shield size={16} className="inline mr-1" />
                      Ich stimme der <button type="button" className="text-primary hover:underline">Datenschutzerklärung</button> zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. *
                    </span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex justify-center items-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Absenden <Send size={18} className="ml-2" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-secondary/50 text-center mt-4">
                  * Pflichtfelder müssen ausgefüllt werden
                </p>
              </form>
            )}
          </motion.div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm">
              <Shield size={16} className="mr-2" />
              Ihre Daten werden sicher übertragen und DSGVO-konform verarbeitet
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;