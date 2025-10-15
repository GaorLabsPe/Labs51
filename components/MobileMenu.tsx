import React from 'react';
import CloseIcon from './icons/CloseIcon';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenModal }) => {
  const handleOpenModalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
        onOpenModal();
    }, 300); // Espera a que la animación de cierre del menú termine
  };
  
  return (
    <div className={`fixed inset-0 z-[100] bg-[#111439] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`} role="dialog" aria-modal="true">
      <div className="container mx-auto px-6 h-[72px] flex justify-between items-center border-b border-white/10">
         <a href="#" onClick={onClose} aria-label="Página de inicio de Labs51">
           <Logo className="h-9 w-auto" />
         </a>
         <button onClick={onClose} aria-label="Cerrar menú" className="text-slate-300 hover:text-white">
           <CloseIcon />
         </button>
      </div>
      <nav className="flex flex-col h-[calc(100vh-72px)] px-8 pt-8 pb-6">
        <div className="flex flex-col items-center space-y-8 text-center mt-8">
            <a href="#features" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Características</a>
            <a href="#how-it-works" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Proceso</a>
            <a href="#automation" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Automatización</a>
            <a href="#pricing" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Planes</a>
            <a href="#" onClick={handleOpenModalClick} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Contáctanos</a>
        </div>
        <div className="mt-auto w-full">
             <a 
                href="#" 
                onClick={handleOpenModalClick}
                className="block w-full text-center gradient-bg text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 btn-glow">
                Empezar Ahora
              </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;