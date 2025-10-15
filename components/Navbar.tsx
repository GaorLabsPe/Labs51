
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111439]/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" className="text-[#F8F8F9] hover:opacity-80 transition-opacity">Labs51</a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Características</a>
          <a href="#how-it-works" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Proceso</a>
          <a href="#automation" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Automatización</a>
          <a href="#pricing" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Planes</a>
        </div>
        <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden sm:block text-slate-300 font-bold hover:text-white transition-colors nav-link">Contáctanos</a>
            <a href="#pricing" className="gradient-bg text-white font-bold py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 btn-glow">Empezar Ahora</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;