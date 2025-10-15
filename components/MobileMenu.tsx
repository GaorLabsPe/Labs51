import React from 'react';
import CloseIcon from './icons/CloseIcon';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Maneja el clic en un enlace de modal
  const handleModalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose(); // Cierra el menú móvil primero
    // El evento de clic se propagará y será capturado por el listener en App.tsx para abrir el modal
    // Pero necesitamos un pequeño retraso para que las transiciones no choquen
    setTimeout(() => {
        const customEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
        e.currentTarget.dispatchEvent(customEvent);
    }, 300); // 300ms es la duración de la transición del menú
  };
  
  return (
    <div className={`fixed inset-0 z-[100] bg-[#111439] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`} role="dialog" aria-modal="true">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center h-[72px]">
         <a href="#" onClick={onClose} aria-label="Página de inicio de Labs51">
           <Logo className="h-9 w-auto" />
         </a>
         <button onClick={onClose} aria-label="Cerrar menú" className="text-slate-300 hover:text-white">
           <CloseIcon />
         </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-[calc(100vh-72px)] space-y-8">
        <a href="#features" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Características</a>
        <a href="#how-it-works" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Proceso</a>
        <a href="#automation" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Automatización</a>
        <a href="#pricing" onClick={onClose} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Planes</a>
        <a href="#" data-trigger-modal onClick={handleModalLinkClick} className="text-2xl text-slate-200 hover:gradient-text transition-colors">Contáctanos</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
