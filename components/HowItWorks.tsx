import React, { useState, useEffect, useRef } from 'react';
import ClipboardListIcon from './icons/ClipboardListIcon';
import PaletteIcon from './icons/PaletteIcon';
import ZapIcon from './icons/ZapIcon';
import RocketIcon from './icons/RocketIcon';

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

const HowItWorks: React.FC = () => {
    const [activeStep, setActiveStep] = useState(-1);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const stepIndex = parseInt(entry.target.getAttribute('data-step-index') || '-1', 10);
                        setActiveStep((prevActiveStep) => Math.max(prevActiveStep, stepIndex));
                    }
                });
            },
            {
                rootMargin: '0px 0px -40% 0px', // Trigger when the top 60% of the element is visible
                threshold: 0.1
            }
        );

        const currentRefs = stepRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    const progressPercentage = activeStep >= 0 ? (activeStep / (steps.length - 1)) * 100 : 0;

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

                {/* --- Progress Bar --- */}
                <div className="relative mb-20 hidden md:block">
                    {/* Background line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#111439] -translate-y-1/2" aria-hidden="true"></div>
                    
                    {/* Progress fill line */}
                    <div 
                        className="absolute top-1/2 left-0 h-1 gradient-bg -translate-y-1/2 transition-all duration-500 ease-out" 
                        style={{ width: `${progressPercentage}%` }}
                        aria-hidden="true"
                    ></div>

                    {/* Step markers */}
                    <div className="relative flex justify-between items-center">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center z-10">
                                <div className={`h-16 w-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 ease-out
                                    ${activeStep >= index ? 'gradient-bg text-white border-[#1c1f48] scale-110' : 'bg-[#111439] text-slate-400 border-[#1c1f48]'}`}>
                                    {step.icon}
                                </div>
                                <p className={`mt-4 font-bold transition-colors duration-500 ${activeStep >= index ? 'text-white' : 'text-slate-400'}`}>
                                    Paso {index + 1}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* --- Step Descriptions --- */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            // FIX: The ref callback must not return a value. Changed from an arrow function expression to a block statement to ensure a void return type.
                            ref={el => { stepRefs.current[index] = el; }}
                            data-step-index={index}
                            className={`text-center p-6 transition-opacity duration-700 ${activeStep >= index ? 'opacity-100' : 'opacity-40 md:opacity-100'}`} // On mobile, fade in as you scroll
                        >
                            <div className="md:hidden relative flex items-center justify-center h-16 w-16 rounded-full gradient-bg text-white mx-auto mb-6 border-4 border-[#1c1f48]">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-medium mb-3 text-[#F8F8F9]">{step.title}</h3>
                            <p className="text-slate-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;