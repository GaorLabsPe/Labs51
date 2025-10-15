import React from 'react';
import BoltIcon from './icons/BoltIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import InvoiceIcon from './icons/InvoiceIcon';
import UsersIcon from './icons/UsersIcon';
import CartClockIcon from './icons/CartClockIcon';
import TagIcon from './icons/TagIcon';

const Automation: React.FC = () => {
    const automations = [
        { icon: <WhatsappIcon />, text: 'Notificaciones de pedidos por WhatsApp' },
        { icon: <CartClockIcon />, text: 'Seguimiento de carritos abandonados' },
        { icon: <TagIcon />, text: 'Gestión de productos con variantes' },
        { icon: <InvoiceIcon />, text: 'Generación de reportes de ventas' },
        { icon: <UsersIcon />, text: 'Dashboard y CRM para gestión de clientes' },
        { icon: <BoltIcon />, text: 'Y muchas más integraciones...' },
    ]

  return (
    <section id="automation" className="py-24" data-animate-section>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:order-last">
            <div className="w-full max-w-lg h-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-white/10 animate-float bg-[#111439]">
                <img
                    src="https://www.businessempresarial.com.pe/wp-content/uploads/2024/08/Foto-2-Emprendimiento.webp"
                    alt="Emprendedora sonriente en su tienda física, revisando su laptop, representando el éxito del negocio."
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                />
            </div>
          </div>
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
               <span className="gradient-text">Automatización con n8n</span>
               <span className="block text-[#F8F8F9]">que trabaja para ti</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">Ahorra tiempo y optimiza tus procesos con flujos de trabajo personalizados. Gracias a nuestra experiencia en integración n8n, creamos automatizaciones que se ejecutan 24/7, permitiéndote enfocarte en crecer.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {automations.map((item, index) => (
                <div 
                  key={index} 
                  data-animate-stagger 
                  className="group relative bg-[#1c1f48] rounded-xl p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8a2be2]/20"
                >
                  {/* Animated Shine Effect */}
                  <div 
                    className="absolute top-0 -left-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ease-out group-hover:left-full" 
                    aria-hidden="true"
                  ></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center">
                    <div className="flex-shrink-0 text-[#00f0b5] mr-4 transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className="text-[#F8F8F9] font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;