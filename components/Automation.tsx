import React from 'react';
import BoltIcon from './icons/BoltIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import InvoiceIcon from './icons/InvoiceIcon';
import UsersIcon from './icons/UsersIcon';
import CartClockIcon from './icons/CartClockIcon';
import TagIcon from './icons/TagIcon';

// Nuevo componente de ilustración SVG, creado para coincidir con el diseño deseado.
const AutomationIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      width="500" 
      height="500" 
      viewBox="0 0 500 500" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      aria-labelledby="automation-title" 
      role="img"
    >
      <title id="automation-title">Diagrama de flujos de automatización para e-commerce</title>
      <defs>
        <linearGradient id="auto-grad-jsx" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a2be2" />
          <stop offset="100%" stopColor="#00f0b5" />
        </linearGradient>
        <filter id="auto-shadow-jsx" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="15" floodColor="#000000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Dashed Connecting Lines */}
      <g opacity="0.6">
        <line x1="250" y1="250" x2="100" y2="100" stroke="url(#auto-grad-jsx)" strokeWidth="2" strokeDasharray="5 10" />
        <line x1="250" y1="250" x2="400" y2="100" stroke="url(#auto-grad-jsx)" strokeWidth="2" strokeDasharray="5 10" />
        <line x1="250" y1="250" x2="100" y2="400" stroke="url(#auto-grad-jsx)" strokeWidth="2" strokeDasharray="5 10" />
        <line x1="250" y1="250" x2="400" y2="400" stroke="url(#auto-grad-jsx)" strokeWidth="2" strokeDasharray="5 10" />
      </g>

      {/* Central Orb */}
      <g transform="translate(250, 250)" filter="url(#auto-shadow-jsx)">
        <circle cx="0" cy="0" r="50" fill="#1c1f48" />
        <circle cx="0" cy="0" r="50" stroke="url(#auto-grad-jsx)" strokeWidth="2" fill="none" />
        <ellipse cx="-15" cy="-8" rx="5" ry="8" fill="#111439" transform="rotate(-30, -15, -8)" />
        <ellipse cx="15" cy="-8" rx="5" ry="8" fill="#111439" transform="rotate(30, 15, -8)" />
        <ellipse cx="0" cy="16" rx="8" ry="5" fill="#111439" />
      </g>

      {/* Top-Left: Search Icon */}
      <g transform="translate(70, 70)" filter="url(#auto-shadow-jsx)">
        <circle cx="30" cy="30" r="30" fill="#1c1f48" />
        <g transform="translate(18, 18)">
          <circle cx="11" cy="11" r="6" stroke="#8a2be2" strokeWidth="2" fill="none" />
          <line x1="15" y1="15" x2="20" y2="20" stroke="#8a2be2" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>

      {/* Top-Right: Email Icon */}
      <g transform="translate(370, 70)" filter="url(#auto-shadow-jsx)">
        <circle cx="30" cy="30" r="30" fill="#1c1f48" />
        <g transform="translate(17, 21)">
          <rect x="0" y="0" width="26" height="18" rx="2" stroke="#00f0b5" strokeWidth="2" fill="none" />
          <polyline points="0 2 13 11 26 2" stroke="#00f0b5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>

      {/* Bottom-Left: Menu Icon */}
      <g transform="translate(70, 370)" filter="url(#auto-shadow-jsx)">
        <circle cx="30" cy="30" r="30" fill="#1c1f48" />
        <g transform="translate(21, 24)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#8a2be2" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="6" x2="18" y2="6" stroke="#8a2be2" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="12" x2="18" y2="12" stroke="#8a2be2" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>

      {/* Bottom-Right: User Icon */}
      <g transform="translate(370, 370)" filter="url(#auto-shadow-jsx)">
        <circle cx="30" cy="30" r="30" fill="#1c1f48" />
        <g transform="translate(20, 18)">
          <circle cx="10" cy="6" r="4" stroke="#00f0b5" strokeWidth="2" fill="none" />
          <path d="M 2 18 v -2 a 4 4 0 0 1 4 -4 h 8 a 4 4 0 0 1 4 4 v 2" stroke="#00f0b5" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

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
            <AutomationIllustration className="max-w-md w-full h-auto animate-float" />
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