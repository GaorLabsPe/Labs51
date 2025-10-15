import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Datos de los códigos de país
const countryCodes = [
    { code: '+51', name: 'PE' },
    { code: '+34', name: 'ES' },
    { code: '+52', name: 'MX' },
    { code: '+54', name: 'AR' },
    { code: '+57', name: 'CO' },
    { code: '+56', name: 'CL' },
    { code: '+1', name: 'US' },
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState('+51'); // Estado para el código de país
    const [phone, setPhone] = useState(''); // Contendrá solo el número
    const [business, setBusiness] = useState('');
    const [errors, setErrors] = useState({ name: '', phone: '', business: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Efecto para manejar animaciones del modal y scroll del body
    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        const animatedElements = content.querySelectorAll('[data-animate-stagger]');

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Activar animación de entrada
            requestAnimationFrame(() => {
                animatedElements.forEach((el, index) => {
                    (el as HTMLElement).style.transitionDelay = `${index * 100}ms`;
                    el.classList.add('animate-in');
                });
            });
        } else {
            document.body.style.overflow = 'auto';
             // Resetear animaciones
            animatedElements.forEach(el => {
                el.classList.remove('animate-in');
            });
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
    
    // Efecto para resetear el estado cuando el modal se cierra
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setName('');
                setPhone('');
                setCountryCode('+51'); // Resetear código de país
                setBusiness('');
                setIsSuccess(false);
                setIsSubmitting(false);
                setErrors({ name: '', phone: '', business: '' });
            }, 300); // Coincide con la duración de la transición
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const validateForm = () => {
        const newErrors = { name: '', phone: '', business: '' };
        let isValid = true;
        if (!name.trim()) {
            newErrors.name = 'El nombre es obligatorio.';
            isValid = false;
        }
        if (!phone.trim()) {
            newErrors.phone = 'El teléfono es obligatorio.';
            isValid = false;
        } else if (!/^\d{7,15}$/.test(phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Introduce un número de teléfono válido.';
            isValid = false;
        }
        if (!business.trim()) {
            newErrors.business = 'El nombre del negocio es obligatorio.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        // Simulación de envío
        // console.log('Submitting:', { name, phone: `${countryCode}${phone}`, business });
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
                
                <div ref={contentRef} className="p-8">
                    {isSuccess ? (
                        <div className="text-center">
                            <div data-animate-stagger className="flex items-center justify-center h-16 w-16 rounded-full gradient-bg text-white mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h2 id="contact-modal-title" data-animate-stagger className="text-2xl font-bold text-white mb-2">¡Gracias!</h2>
                            <p data-animate-stagger className="text-slate-300">Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                        </div>
                    ) : (
                        <>
                            <h2 id="contact-modal-title" data-animate-stagger className="text-3xl font-bold text-white mb-2">Empecemos tu Proyecto</h2>
                            <p data-animate-stagger className="text-slate-300 mb-6">Déjanos tus datos y un experto te contactará.</p>
                            <form onSubmit={handleSubmit} className="space-y-1">
                                <div data-animate-stagger>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nombre</label>
                                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre completo" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a2be2] bg-[#111439] text-white transition-colors ${errors.name ? 'border-red-500/50' : 'border-white/20'}`} aria-invalid={!!errors.name} aria-describedby="name-error" />
                                    <p id="name-error" className="text-red-400 text-sm mt-1 h-5 transition-opacity duration-300" role="alert">{errors.name}</p>
                                </div>
                                <div data-animate-stagger>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Teléfono</label>
                                    <div className="flex">
                                        <div className="relative">
                                            <select
                                                name="country-code"
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="cursor-pointer appearance-none gradient-bg text-white font-semibold pl-4 pr-10 py-2 rounded-l-lg focus:outline-none transition-all duration-300 hover:brightness-110 btn-glow"
                                                aria-label="Código de país"
                                            >
                                                {countryCodes.map(country => (
                                                    <option key={country.name} value={country.code} className="bg-[#1c1f48] font-semibold text-white">{country.name} {country.code}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="987 654 321" className={`w-full px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#8a2be2] bg-[#111439] text-white transition-colors rounded-l-none ${errors.phone ? 'border-red-500/50' : 'border-white/20'}`} aria-invalid={!!errors.phone} aria-describedby="phone-error" />
                                    </div>
                                    <p id="phone-error" className="text-red-400 text-sm mt-1 h-5 transition-opacity duration-300" role="alert">{errors.phone}</p>
                                </div>
                                <div data-animate-stagger>
                                    <label htmlFor="business" className="block text-sm font-medium text-slate-300 mb-1">Nombre del Negocio o Rubro</label>
                                    <input id="business" type="text" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Ej: Tienda de Ropa, Consultoría..." className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a2be2] bg-[#111439] text-white transition-colors ${errors.business ? 'border-red-500/50' : 'border-white/20'}`} aria-invalid={!!errors.business} aria-describedby="business-error" />
                                    <p id="business-error" className="text-red-400 text-sm mt-1 h-5 transition-opacity duration-300" role="alert">{errors.business}</p>
                                </div>
                                <div className="pt-3" data-animate-stagger>
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
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;