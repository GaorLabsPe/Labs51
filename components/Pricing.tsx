import React from 'react';
import CheckIcon from './icons/CheckIcon';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24" data-animate-section>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="block text-[#F8F8F9]">Un Plan para Cada Etapa</span>
                        <span className="gradient-text">de tu Negocio</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                        Inversión transparente para un crecimiento sin sorpresas. Elige el plan que se adapte a ti.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Plan Emprendedor */}
                    <div data-animate-stagger className="bg-[#1c1f48] p-8 rounded-2xl border border-white/10 flex flex-col">
                        <h3 className="text-3xl font-bold text-white mb-2">Plan Emprendedor</h3>
                        <p className="text-slate-400 mb-6">La solución perfecta para lanzar tu primera tienda online.</p>
                        <div className="my-4">
                            <span className="text-5xl font-bold gradient-text">499€</span>
                            <span className="text-slate-400"> / pago único</span>
                        </div>
                        <ul className="space-y-3 text-left mb-8 flex-grow">
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">Tienda Online Completa</span></li>
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">Diseño Personalizado Básico</span></li>
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">Pasarela de Pagos</span></li>
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">3 Automatizaciones Clave</span></li>
                        </ul>
                        <a href="#contact" className="w-full text-center bg-transparent text-[#F8F8F9] font-bold py-3 px-8 rounded-lg border-2 border-[#F8F8F9]/50 hover:border-white hover:bg-white/5 text-lg transition-all duration-300">
                            Me Interesa
                        </a>
                    </div>

                    {/* Plan Negocio en Crecimiento */}
                    <div data-animate-stagger className="bg-[#1c1f48] p-8 rounded-2xl border-2 border-[#8a2be2] relative flex flex-col">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-sm font-bold text-white gradient-bg rounded-full">MÁS POPULAR</div>
                        <h3 className="text-3xl font-bold text-white mb-2">Negocio en Crecimiento</h3>
                        <p className="text-slate-400 mb-6">Más automatizaciones y herramientas para escalar tus ventas.</p>
                        <div className="my-4">
                           <span className="text-5xl font-bold gradient-text">999€</span>
                           <span className="text-slate-400"> / pago único</span>
                        </div>
                        <ul className="space-y-3 text-left mb-8 flex-grow">
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">Todo lo del Plan Emprendedor</span></li>
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">Diseño Avanzado y UX</span></li>
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">CRM y Gestión de Clientes</span></li>
                            <li className="flex items-start"><div className="text-[#00f0b5] mr-3 flex-shrink-0 pt-1"><CheckIcon /></div><span className="text-slate-300">Automatizaciones Ilimitadas</span></li>
                        </ul>
                        <a href="#contact" className="w-full text-center gradient-bg text-white font-bold py-3 px-8 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 btn-glow">
                            Agendar Consulta
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;