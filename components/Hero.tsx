import React from 'react';

// Se define el SVG como un componente local de React para garantizar su renderizado y rendimiento.
// Esto evita problemas de incompatibilidad entre la animación CSS y la etiqueta <img>.
const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      width="500" 
      height="500" 
      viewBox="0 0 500 500" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby="hero-title"
      role="img"
    >
      <title id="hero-title">Diagrama de automatización de negocio e-commerce con Labs51</title>
      <defs>
        <linearGradient id="hero-grad-jsx" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#8a2be2'}}/>
          <stop offset="100%" style={{stopColor:'#00f0b5'}}/>
        </linearGradient>
        <filter id="hero-shadow-jsx" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      <g transform="rotate(15, 250, 250)">
        <circle cx="250" cy="250" r="200" stroke="url(#hero-grad-jsx)" strokeWidth="2" fill="none" opacity="0.2" strokeDasharray="10 10"/>
        <circle cx="250" cy="250" r="150" stroke="url(#hero-grad-jsx)" strokeWidth="1.5" fill="none" opacity="0.3"/>
        <circle cx="250" cy="250" r="100" stroke="#00f0b5" strokeWidth="1" fill="none" opacity="0.5"/>
        <g transform="translate(180, 180) rotate(45, 70, 70)" filter="url(#hero-shadow-jsx)">
          <rect x="0" y="0" width="140" height="140" rx="20" fill="#1c1f48" stroke="url(#hero-grad-jsx)" strokeWidth="2"/>
          <path d="M 70 20 L 70 120" stroke="#8a2be2" strokeWidth="2" opacity="0.5"/>
          <path d="M 20 70 L 120 70" stroke="#00f0b5" strokeWidth="2" opacity="0.5"/>
          <circle cx="70" cy="70" r="10" fill="url(#hero-grad-jsx)"/>
        </g>
        <circle cx="100" cy="100" r="15" fill="#1c1f48" stroke="#8a2be2" strokeWidth="2"/>
        <circle cx="400" cy="400" r="20" fill="#1c1f48" stroke="#00f0b5" strokeWidth="2"/>
        <rect x="350" y="80" width="40" height="40" rx="10" fill="none" stroke="url(#hero-grad-jsx)" strokeWidth="2" transform="rotate(-30, 370, 100)"/>
        <rect x="80" y="350" width="30" height="30" rx="5" fill="none" stroke="url(#hero-grad-jsx)" strokeWidth="2" transform="rotate(60, 95, 365)"/>
      </g>
    </svg>
  );
};


const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#111439] animate-fade-in overflow-hidden">
        {/* Replaced SVG background with more reliable CSS blurred shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#8a2be2]/20 -top-48 -left-48" style={{filter: 'blur(150px)'}}></div>
            <div className="absolute w-[700px] h-[700px] rounded-full bg-[#00f0b5]/20 -bottom-48 -right-24" style={{filter: 'blur(150px)'}}></div>
        </div>

      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F8F9] mb-6">
              Automatiza tu <span className="gradient-text">E-commerce</span> y Vende Más
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0">
              La plataforma todo-en-uno para crear y escalar tu tienda online con potentes automatizaciones n8n, sin complicaciones técnicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="gradient-bg text-white font-bold py-3 px-8 rounded-lg text-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40">
                Empezar Ahora
              </a>
              <a 
                href="#features" 
                className="bg-transparent text-[#F8F8F9] font-bold py-3 px-8 rounded-lg border-2 border-[#F8F8F9]/50 hover:border-white hover:bg-white/5 text-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/40">
                Ver Características
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
             <HeroIllustration className="w-full max-w-lg h-auto animate-float"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;