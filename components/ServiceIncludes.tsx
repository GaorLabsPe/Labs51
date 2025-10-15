import React from 'react';
import CheckIcon from './icons/CheckIcon';

const ServiceIncludes: React.FC = () => {
  const items = [
    'Configuración Completa en tu propio hosting.',
    'Personalización de Marca (logo, colores, textos).',
    'Carga Inicial de tu catálogo de productos.',
    'Implementación de Flujos de Automatización clave con n8n.',
    'Capacitación para gestionar tu tienda y pedidos.',
  ];

  const serviceImageSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJzZXJ2aWNlLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4YTJiZTIiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMGYwYjUiLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9InNlcnZpY2Utc2hhZG93IiB4PSItMzAlIiB5PSItMzAlIiB3aWR0aD0iMTYwJSIgaGVpZ2h0PSIxNjAlIj48ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iMTAiIHN0ZERldmlhdGlvbj0iMTUiIGZsb29kLWNvbG9yPSIjMDAwMDAwIiBmbG9vZC1vcGFjaXR5PSIwLjIiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3QgeD0iNTAiIHk9IjE1MCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIHJ4PSIyMCIgZmlsbD0iIzFjMWY0OCIgZmlsdGVyPSJ1cmwoI3NlcnZpY2Utc2hhZG93KSIvPjxyZWN0IHg9IjUwIiB5PSIxNTAiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAiIHJ4PSIyMCIgcnk9IjIwIiBmaWxsPSJ1cmwoI3NlcnZpY2UtZ3JhZCkiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMTcwIiByPSI4IiBmaWxsPSIjOGEyYmUyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSIxMTAiIGN5PSIxNzAiIHI9IjgiIGZpbGw9IiMwMGYwYjUiIG9wYWNpdHk9IjAuNSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLCAtMjApIiBmaWx0ZXI9InVybCgjc2VydmljZS1zaGFkb3cpIj48cmVjdCB4PSI4MCIgeT0iODAiIHdpZHRoPSIxODAiIGhlaWdodD0iMTAwIiByeD0iMTUiIGZpbGw9IiMxMTE0MzkiIHN0cm9rZT0iIzhhMmJlMiIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPjxjaXJjbGUgY3g9IjExMCIgY3k9IjEzMCIgcj0iMTAiIGZpbGw9IiMwMGYwYjUiLz48cGF0aCBkPSJNIDEwNiAxMzAgTCAxMDkgMTM0IEwgMTE1IDEyNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHJlY3QgeD0iMTMwIiB5PSIxMjUiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjMWMxZjQ4Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1MCwgNDApIiBmaWx0ZXI9InVybCgjc2VydmljZS1zaGFkb3cpIj48cmVjdCB4PSIxNTAiIHk9IjIwMCIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxMjAiIHJ4PSIxNSIgZmlsbD0iIzExMTQzOSIgc3Ryb2tlPSIjMDBmMGI1IiBzdHJva2Utb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iMTgwIiBjeT0iMjMwIiByPSIxMCIgZmlsbD0iIzAwZjBiNSIvPjxwYXRoIGQ9Ik0gMTc2IDIzMCBMIDE3OSAyMzQgTCAxODUgMjI2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cmVjdCB4PSIyMDAiIHk9IjIyNSIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMCIgcng9IjUiIGZpbGw9IiMxYzFmNDgiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyNjAiIHI9IjEwIiBmaWxsPSIjMDBmMGI1Ii8+PHBhdGggZD0iTSAxNzYgMjYwIEwgMTc5IDI2NCBMIDE4NSAyNTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxyZWN0IHg9IjIwMCIgeT0iMjU1IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzFjMWY0OCIvPjxjaXJjbGUgY3g9IjE4MCIgY3k9IjI5MCIgcj0iMTAiIGZpbGw9IiMxYzFmNDgiIHN0cm9rZT0iIzAwZjBiNSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cmVjdCB4PSIyMDAiIHk9IjI4NSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMCIgcng9IjUiIGZpbGw9IiMxYzFmNDgiLz48L2c+PC9zdmc+";

  return (
    <section id="service" className="py-24" data-animate-section>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
               <span className="gradient-text">Servicio de</span>
               <span className="block text-[#F8F8F9]">Implementación</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">Nos encargamos de todo el proceso técnico para que puedas enfocarte en vender.</p>
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                   <div className="flex-shrink-0 h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-4 mt-1 text-white">
                     <CheckIcon />
                  </div>
                  <span className="text-lg text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={serviceImageSrc} alt="Proceso de implementación de tienda online automatizada" className="max-w-md w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;