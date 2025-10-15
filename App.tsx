import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Automation from './components/Automation';
import ServiceIncludes from './components/ServiceIncludes';
import Growth from './components/Growth';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('[data-animate-section]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-[#111439] font-sans text-slate-300 relative z-10">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Automation />
        <ServiceIncludes />
        <Growth />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default App;