import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/i18n';

// Components
import Header from './components/Header';
import TopTicker from './components/TopTicker';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Partners from './components/Partners';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DownloadPopup from './components/DownloadPopup';
import Terms from './components/Terms';
import AGB from './components/AGB';
import Datenschutz from './components/Datenschutz';

function HomePage() {
  const { t } = useTranslation();
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  
  useEffect(() => {
    // Update document title and meta description based on language
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
    
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Load animation library code
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    // Initialize animations after a short delay to ensure elements are rendered
    setTimeout(animateElements, 100);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [t]);

  const handleShowDatenschutz = () => {
    setShowDatenschutz(true);
    // Scroll to the datenschutz section after it becomes visible
    setTimeout(() => {
      const element = document.getElementById('datenschutz');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleCloseDatenschutz = () => {
    setShowDatenschutz(false);
  };

  return (
    <div className="min-h-screen snap-y snap-mandatory">
      <TopTicker />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Partners />
      <Pricing />
      <Contact />
{/*
  <Datenschutz isVisible={showDatenschutz} onClose={handleCloseDatenschutz} />
*/}
      <Footer onShowDatenschutz={handleShowDatenschutz} />
      <DownloadPopup delay={5000} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy"  element={
    <div className="min-h-screen snap-y snap-mandatory">
      <Datenschutz isVisible={true} />
    </div>
  }   />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
