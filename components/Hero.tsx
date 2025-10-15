import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#111439] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#8a2be2]/20 -top-48 -left-48" style={{filter: 'blur(150px)'}}></div>
            <div className="absolute w-[700px] h-[700px] rounded-full bg-[#00f0b5]/20 -bottom-48 -right-24" style={{filter: 'blur(150px)'}}></div>
        </div>

      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F8F9] mb-6 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Automatiza tu Negocio con una <span className="gradient-text">Tienda Online</span> y Vende Más
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              La plataforma todo-en-uno para crear y escalar tu tienda online con potentes automatizaciones n8n, sin complicaciones técnicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              <button
                type="button"
                data-trigger-modal
                className="gradient-bg text-white font-bold py-3 px-8 rounded-lg text-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40 btn-glow">
                Empezar Ahora
              </button>
              <a 
                href="#features" 
                className="bg-transparent text-[#F8F8F9] font-bold py-3 px-8 rounded-lg border-2 border-[#F8F8F9]/50 hover:border-white hover:bg-white/5 text-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/40">
                Ver Características
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 lg:mt-0">
             <div className="w-full max-w-lg h-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-white/10 animate-float bg-[#111439]">
                <img
                    src="https://elcomercio-elcomercio-prod.web.arc-cdn.net/resizer/v2/ZLJO7Y2HRJHURLCYDIJSEW66IM.jpg?auth=0576a279391bd503adf87431ea6a99d4ab5c626e31ede5ad47e96293aa650cf7&width=1200&height=800&smart=true&quality=75"
                    alt="Emprendedora sonriente en su tienda, mostrando el éxito de su negocio online automatizado"
                    className="w-full h-full object-cover"
                    width="512"
                    height="341"
                    loading="eager"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;