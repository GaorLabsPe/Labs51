import React from 'react';
import GrowthCard from './GrowthCard';
import ChartIcon from './icons/ChartIcon';
import MegaphoneIcon from './icons/MegaphoneIcon';
import SearchIcon from './icons/SearchIcon';
import RocketIcon from './icons/RocketIcon';

const Growth: React.FC = () => {
  const growthData = [
    {
      icon: <ChartIcon />,
      title: 'Analíticas Avanzadas',
      description: 'Toma decisiones basadas en datos con reportes de ventas, comportamiento de clientes y rendimiento de productos.',
    },
    {
      icon: <MegaphoneIcon />,
      title: 'Marketing Integrado',
      description: 'Lanza campañas, crea cupones y recupera carritos abandonados para maximizar tus ingresos de forma automática.',
    },
    {
      icon: <SearchIcon />,
      title: 'Optimización SEO',
      description: 'Atrae más clientes desde Google con herramientas SEO que te posicionan por encima de tu competencia.',
    },
    {
        icon: <RocketIcon />,
        title: 'Escalabilidad sin Límites',
        description: 'Nuestra infraestructura está lista para crecer contigo, soportando miles de productos y picos de tráfico sin problemas.',
    },
  ];

  return (
    <section id="growth" className="py-24" data-animate-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="block text-[#F8F8F9]">Diseñado para tu</span>
            <span className="gradient-text">Crecimiento Exponencial</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Te damos más que una tienda online, te damos el motor para convertir tu negocio en el más vendedor.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {growthData.map((feature, index) => (
            <div key={index}>
                <GrowthCard icon={feature.icon} title={feature.title} description={feature.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Growth;
