import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [business, setBusiness] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);
    
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setName('');
                setPhone('');
                setBusiness('');
                setIsSuccess(false);
                setIsSubmitting(false);
            }, 300); // Coincide con la duración de la transición
            return () => clearTimeout(timer);
        }
    }, [isOpen]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone || !business) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
            }, 2500);
        }, 1500);
    };

    return (
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true"></div>
            <div
                ref={modalRef}
                className={`relative bg-[#1c1f48] rounded-2xl shadow-2xl border border-white/10 w-[90vw] max-w-md m-4 transform transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
                    aria-label="Cerrar modal"
                >
                    <CloseIcon />
                </button>
                
                <div className="p-8">
                    {isSuccess ? (
                        <div className="text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full gradient-bg text-white mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h2 id="contact-modal-title" className="text-2xl font-bold text-white mb-2">¡Gracias!</h2>
                            <p className="text-slate-300">Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                        </div>
                    ) : (
                        <>
                            <h2 id="contact-modal-title" className="text-3xl font-bold text-white mb-2">Empecemos tu Proyecto</h2>
                            <p className="text-slate-300 mb-6">Déjanos tus datos y un experto te contactará.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nombre</label>
                                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre completo" className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a2be2] bg-[#111439] text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Teléfono</label>
                                    <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+34 123 456 789" className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a2be2] bg-[#111439] text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="business" className="block text-sm font-medium text-slate-300 mb-1">Nombre del Negocio o Rubro</label>
                                    <input id="business" type="text" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Ej: Tienda de Ropa, Consultoría..." className="w-full px-3 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a2be2] bg-[#111439] text-white" required />
                                </div>
                                <button type="submit" className="w-full flex justify-center items-center gap-2 gradient-bg text-white font-bold py-3 px-8 rounded-lg text-lg transform transition-all duration-300 ease-in-out hover:scale-105 btn-glow disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Contacto
                                            <SendIcon />
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
