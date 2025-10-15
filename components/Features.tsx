import React from 'react';
import FeatureCard from './FeatureCard';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import PaletteIcon from './icons/PaletteIcon';
import CogIcon from './icons/CogIcon';

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <ShoppingCartIcon />,
      title: 'Tienda Online Profesional',
      items: [
        'Catálogo de productos ilimitados.',
        'Carrito de compras optimizado para la conversión.',
        'Integración con múltiples pasarelas de pago seguras.',
        'Diseño 100% responsivo para móviles y tablets.',
      ],
    },
    {
      icon: <PaletteIcon />,
      title: 'Diseño Personalizable',
      items: [
        'Selección de plantillas modernas y de alta calidad.',
        'Editor visual "arrastrar y soltar" fácil de usar.',
        'Personalización completa de colores, fuentes y estilos.',
        'Adaptable a la identidad visual de tu marca.',
      ],
    },
    {
      icon: <CogIcon />,
      title: 'Gestión Simplificada',
      items: [
        'Panel de administración centralizado e intuitivo.',
        'Gestión de inventario y seguimiento de pedidos.',
        'Creación de cupones de descuento y promociones.',
        'Reportes y analíticas de ventas para tomar decisiones.',
      ],
    },
  ];

  return (
    <section id="features" className="py-24" data-animate-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="block text-[#F8F8F9]">Todo lo que necesitas</span>
            <span className="gradient-text">para Vender Online</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Desde la vitrina de tus productos hasta el cobro, nuestra plataforma te brinda las herramientas para crecer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} data-animate-stagger>
                <FeatureCard icon={feature.icon} title={feature.title} items={feature.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
