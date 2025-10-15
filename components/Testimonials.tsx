import React from 'react';
import QuoteIcon from './icons/QuoteIcon';
import AvatarIcon from './AvatarIcon';

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "Labs51 transformó mi idea en un negocio real. Ahora mis ventas se gestionan solas y puedo enfocarme en mis productos. ¡El mejor partner para empezar!",
            name: "Ana Pérez",
            company: "Fundadora de Dulce Rincón",
        },
        {
            quote: "El proceso de automatización fue increíblemente sencillo. Ahorramos horas cada semana en tareas manuales. Totalmente recomendado para cualquier emprendedor.",
            name: "Carlos Gómez",
            company: "CEO de Tech Gadgets",
        },
    ];

    return (
        <section id="testimonials" className="py-24" data-animate-section>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="block text-[#F8F8F9]">Lo que Nuestros</span>
                        <span className="gradient-text">Clientes Dicen</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                        Historias reales de emprendedores que han transformado sus negocios con nuestra ayuda.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} data-animate-stagger className="bg-[#1c1f48] p-8 rounded-2xl border border-white/10 relative">
                            <QuoteIcon className="absolute top-6 left-6 w-12 h-12 text-[#8a2be2]/30" />
                            <p className="relative text-lg text-slate-200 italic mb-6 z-10">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <AvatarIcon name={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-[#00f0b5]" />
                                <div>
                                    <p className="font-bold text-lg text-white">{testimonial.name}</p>
                                    <p className="text-slate-400">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;