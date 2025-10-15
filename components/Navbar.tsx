import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import HamburgerIcon from './icons/HamburgerIcon';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => { // Cleanup
        document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111439]/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 h-[72px] flex justify-between items-center">
          <a href="#" className="flex-shrink-0" aria-label="Página de inicio de Labs51">
            <Logo className="h-9 md:h-10 w-auto" />
          </a>
          
          {/* Desktop Navigation & CTAs */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Características</a>
            <a href="#how-it-works" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Proceso</a>
            <a href="#automation" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Automatización</a>
            <a href="#pricing" className="nav-link text-slate-300 font-medium hover:text-white transition-colors">Planes</a>
            <button type="button" onClick={onOpenModal} className="hidden lg:block text-slate-300 font-bold hover:text-white transition-colors nav-link">Contáctanos</button>
            <button type="button" onClick={onOpenModal} className="gradient-bg text-white font-bold py-2 px-5 rounded-lg hover:opacity-90 transition-all duration-300 btn-glow">Empezar Ahora</button>
          </div>
              
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={handleOpenMenu} className="text-slate-300 hover:text-white" aria-label="Abrir menú">
                <HamburgerIcon />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} onOpenModal={onOpenModal} />
    </>
  );
};

export default Navbar;