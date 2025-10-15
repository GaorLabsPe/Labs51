
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Automation from './components/Automation';
import ServiceIncludes from './components/ServiceIncludes';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Growth from './components/Growth';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import ContactModal from './components/ContactModal';
import LoadingScreen from './components/LoadingScreen'; // Importar la pantalla de carga

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para la pantalla de carga

  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    // Observador para animaciones de scroll
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          section.classList.add('animate-in');

          const staggerChildren = section.querySelectorAll('[data-animate-stagger]');
          if (staggerChildren.length > 0) {
            staggerChildren.forEach((child, index) => {
              (child as HTMLElement).style.transitionDelay = `${index * 150}ms`;
              child.classList.add('animate-in');
            });
          }
          obs.unobserve(section);
        }
      });
    }, { threshold: 0.15 });

    // No iniciar observadores hasta que la carga termine
    if (!isLoading) {
        const sections = document.querySelectorAll('[data-animate-section]');
        sections.forEach(section => {
          observer.observe(section);
        });
        
        return () => {
          sections.forEach(section => {
            observer.unobserve(section);
          });
        };
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onAnimationComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Background Shapes - Isolated from content flow */}
          <div 
            className="fixed inset-0 -z-10"
            aria-hidden="true"
          >
            <div 
              className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#8a2be2]/20 rounded-full filter blur-[150px]"
            ></div>
            <div 
              className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#00f0b5]/20 rounded-full filter blur-[150px]"
            ></div>
          </div>

          <div className="app-fade-in font-sans text-slate-300 w-full">
            <Navbar onOpenModal={openModal} />
            <main>
              <Hero onOpenModal={openModal} />
              <Features />
              <HowItWorks />
              <Automation />
              <ServiceIncludes />
              <Stats />
              <Testimonials />
              <Growth />
              <Pricing onOpenModal={openModal} />
            </main>
            <Footer />
            <ChatButton />
          </div>
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
      )}
    </>
  );
};

export default App;
