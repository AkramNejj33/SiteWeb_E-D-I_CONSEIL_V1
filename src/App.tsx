import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './pages/About';
import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import ClientLogos from './components/ClientLogos';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  useEffect(() => {
    // Ajouter les styles d'animation pour les services
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes highlightService {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        100% { transform: scale(1); }
      }
      .highlight-service {
        animation: highlightService 1.5s ease-in-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleServiceHighlight = () => {
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const serviceCards = servicesSection.querySelectorAll('.service-card');
        serviceCards.forEach((card) => {
          card.classList.add('highlight-service');
          setTimeout(() => {
            card.classList.remove('highlight-service');
          }, 1500);
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onServiceHighlight={handleServiceHighlight} />
      <Hero onExploreServices={handleServiceHighlight} />
      <Services />
      <About />
      <TechStack />
      <CaseStudies />
      <Testimonials />
      <ClientLogos />
      <Blog />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;