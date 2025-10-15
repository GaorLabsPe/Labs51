import React from 'react';
import CheckIcon from './icons/CheckIcon';

const ServiceIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      width="500" 
      height="500" 
      viewBox="0 0 500 500" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      aria-labelledby="service-title" 
      role="img"
    >
      <title id="service-title">Proceso de implementación de tienda online automatizada</title>
      <defs>
        <linearGradient id="si-grad-jsx" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a2be2" />
          <stop offset="100%" stopColor="#00f0b5" />
        </linearGradient>
        <filter id="si-shadow-jsx" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000000" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#si-shadow-jsx)">
        <rect x="50" y="100" width="400" height="300" rx="20" fill="#1c1f48" stroke="#8a2be2" strokeOpacity="0.5" />
        <rect x="50" y="100" width="400" height="40" rx="20" ry="20" fill="#111439" />
        <circle cx="80" cy="120" r="8" fill="#4f4f4f" />
        <circle cx="110" cy="120" r="8" fill="#4f4f4f" />
        <circle cx="140" cy="120" r="8" fill="#4f4f4f" />
      </g>
      <rect x="70" y="150" width="100" height="230" rx="10" fill="#111439" />
      <rect x="85" y="170" width="70" height="10" rx="5" fill="url(#si-grad-jsx)" />
      <rect x="85" y="195" width="50" height="8" rx="4" fill="#4f4f4f" />
      <rect x="85" y="215" width="50" height="8" rx="4" fill="#4f4f4f" />
      <rect x="85" y="235" width="50" height="8" rx="4" fill="#4f4f4f" />
      <rect x="190" y="150" width="240" height="230" rx="10" fill="#111439" />
      <path d="M 210 250 C 230 220, 260 280, 280 250 S 320 200, 340 230 S 380 280, 400 250" stroke="url(#si-grad-jsx)" strokeWidth="3" fill="none" />
      <g transform="translate(0, 50)">
        <rect x="210" y="240" width="90" height="70" rx="10" fill="#1c1f48" stroke="#00f0b5" strokeOpacity="0.5" />
        <circle cx="255" cy="265" r="15" fill="#111439" />
        <rect x="225" y="290" width="60" height="8" rx="4" fill="#4f4f4f" />
      </g>
      <g transform="translate(110, 50)">
        <rect x="210" y="240" width="90" height="70" rx="10" fill="#1c1f48" stroke="#8a2be2" strokeOpacity="0.5" />
        <circle cx="255" cy="265" r="15" fill="#111439" />
        <rect x="225" y="290" width="60" height="8" rx="4" fill="#4f4f4f" />
      </g>
      <g transform="translate(350, 50)" filter="url(#si-shadow-jsx)">
        <circle cx="0" cy="0" r="25" fill="url(#si-grad-jsx)" />
        <path d="M -10 0 L -2 8 L 10 -4" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
};


const ServiceIncludes: React.FC = () => {
  const items = [
    'Configuración Completa en tu propio hosting.',
    'Personalización de Marca (logo, colores, textos).',
    'Carga Inicial de tu catálogo de productos.',
    'Implementación de Flujos de Automatización clave con n8n.',
    'Capacitación para gestionar tu tienda y pedidos.',
  ];

  return (
    <section id="service" className="py-24" data-animate-section>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
               <span className="gradient-text">Servicio de</span>
               <span className="block text-[#F8F8F9]">Implementación</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">Nos encargamos de todo el proceso técnico para que puedas enfocarte en vender.</p>
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} data-animate-stagger className="flex items-start group">
                   <div className="flex-shrink-0 h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-4 mt-1 text-white transition-transform duration-300 group-hover:scale-110">
                     <CheckIcon />
                  </div>
                  <span className="text-lg text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <ServiceIllustration className="max-w-md w-full h-auto animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;