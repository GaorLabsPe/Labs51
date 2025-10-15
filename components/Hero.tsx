import React from 'react';

// Se ha eliminado el componente HeroIllustration ya que será reemplazado por un video.

const Hero: React.FC = () => {
  // Un póster SVG optimizado y codificado como Data URI para eliminar una solicitud HTTP.
  const posterSvgDataUri = "data:image/svg+xml,%3csvg width='512' height='512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter id='b' x='-20%25' y='-20%25' width='140%25' height='140%25'%3e%3cfeGaussianBlur stdDeviation='20' /%3e%3c/filter%3e%3clinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='512' y2='512'%3e%3cstop offset='0' stop-color='%23111439'/%3e%3cstop offset='.5' stop-color='%238a2be2'/%3e%3cstop offset='1' stop-color='%2300f0b5'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23a)' opacity='0.5'/%3e%3crect width='100%25' height='100%25' fill='url(%23a)' filter='url(%23b)' opacity='0.5'/%3e%3c/svg%3e";

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
              <a 
                href="#" 
                data-trigger-modal
                className="gradient-bg text-white font-bold py-3 px-8 rounded-lg text-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40 btn-glow">
                Empezar Ahora
              </a>
              <a 
                href="#features" 
                className="bg-transparent text-[#F8F8F9] font-bold py-3 px-8 rounded-lg border-2 border-[#F8F8F9]/50 hover:border-white hover:bg-white/5 text-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/40">
                Ver Características
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 lg:mt-0">
             <div className="w-full max-w-lg h-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-white/10 animate-float bg-[#111439]">
                <video
                    src="https://videos.pexels.com/video-files/8061352/8061352-hd_1920_1080_25fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={posterSvgDataUri}
                    className="w-full h-full object-cover"
                    title="Emprendedora feliz gestionando los pedidos de su tienda online"
                >
                    Tu navegador no soporta el elemento de video.
                </video>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;