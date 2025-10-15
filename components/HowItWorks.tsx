import React from 'react';
import ClipboardListIcon from './icons/ClipboardListIcon';
import PaletteIcon from './icons/PaletteIcon';
import ZapIcon from './icons/ZapIcon';
import RocketIcon from './icons/RocketIcon';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <ClipboardListIcon />,
            title: "Descubrimiento",
            description: "Hablamos contigo para entender tu negocio, tus productos y tus metas. Sin tecnicismos."
        },
        {
            icon: <PaletteIcon />,
            title: "Diseño y Creación",
            description: "Construimos una tienda atractiva y fácil de usar que refleje la identidad de tu marca."
        },
        {
            icon: <ZapIcon />,
            title: "Magia de Automatización",
            description: "Conectamos tus herramientas para que los pedidos y notificaciones funcionen en piloto automático."
        },
        {
            icon: <RocketIcon />,
            title: "Lanzamiento y Soporte",
            description: "Lanzamos tu tienda al mundo y te capacitamos para que tomes el control. ¡Nunca estarás solo!"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-[#1c1f48]/50" data-animate-section>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="block text-[#F8F8F9]">Tu Tienda Online en</span>
                        <span className="gradient-text">4 Pasos Sencillos</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                        Desmitificamos el proceso para que puedas empezar a vender lo antes posible, sin complicaciones.
                    </p>
                </div>
                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-[#1c1f48] via-[#8a2be2]/50 to-[#1c1f48]" aria-hidden="true"></div>
                    
                    <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} data-animate-stagger className="text-center p-6">
                                <div className="relative flex items-center justify-center h-16 w-16 rounded-full gradient-bg text-white mx-auto mb-6 border-4 border-[#1c1f48]">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-medium mb-3 text-[#F8F8F9]">{step.title}</h3>
                                <p className="text-slate-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
