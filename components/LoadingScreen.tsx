import React, { useState, useEffect } from 'react';
import StaticLogo from './StaticLogo';

const LoadingScreen: React.FC<{ onAnimationComplete: () => void }> = ({ onAnimationComplete }) => {
  const [phase, setPhase] = useState('start');

  useEffect(() => {
    const timers: number[] = [];
    
    // Orquestación de la secuencia de animación
    timers.push(setTimeout(() => setPhase('logo'), 1200));       // Empezar a mostrar el logo
    timers.push(setTimeout(() => setPhase('tagline'), 2000));    // Mostrar el eslogan
    timers.push(setTimeout(() => setPhase('exiting'), 3500));     // Iniciar la salida
    timers.push(setTimeout(onAnimationComplete, 4000));          // Completar y desmontar

    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  // Coordenadas de la red de automatización
  const networkLines = [
    { d: "M 100 100 L 50 50" },
    { d: "M 100 100 L 150 50" },
    { d: "M 100 100 L 50 150" },
    { d: "M 100 100 L 150 150" },
    { d: "M 100 100 L 100 30" },
    { d: "M 100 100 L 100 170" },
    { d: "M 100 100 L 30 100" },
    { d: "M 100 100 L 170 100" },
  ];

  const nodes = [
    { cx: 50, cy: 50 }, { cx: 150, cy: 50 },
    { cx: 50, cy: 150 }, { cx: 150, cy: 150 },
    { cx: 100, cy: 30 }, { cx: 100, cy: 170 },
    { cx: 30, cy: 100 }, { cx: 170, cy: 100 },
    { cx: 100, cy: 100 },
  ];

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#111439] transition-opacity duration-500 ease-in-out ${phase === 'exiting' ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy="true"
    >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            {/* Red de fondo */}
            <svg viewBox="0 0 200 200" className={`absolute w-full h-full overflow-visible transition-opacity duration-700 ease-out ${phase === 'logo' || phase === 'tagline' ? 'opacity-30' : 'opacity-100'}`}>
                <defs>
                    <linearGradient id="loading-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop stopColor="#8A2BE2" />
                        <stop offset="1" stopColor="#00F0B5" />
                    </linearGradient>
                </defs>
                <g>
                    {networkLines.map((line, i) => (
                        <path
                            key={`line-${i}`}
                            d={line.d}
                            stroke="url(#loading-grad)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            pathLength="1"
                            className="draw-line"
                            style={{ animationDelay: `${i * 50}ms` }}
                        />
                    ))}
                </g>
                <g>
                    {nodes.map((node, i) => (
                        <circle
                            key={`node-${i}`}
                            cx={node.cx}
                            cy={node.cy}
                            r="3"
                            fill="url(#loading-grad)"
                            className="pop-in"
                            style={{ animationDelay: `${300 + i * 50}ms` }}
                         />
                    ))}
                </g>
            </svg>
            
            {/* Logo estático superpuesto */}
            <div className={`absolute transition-all duration-700 ease-out ${phase === 'logo' || phase === 'tagline' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <StaticLogo className="w-64 h-auto md:w-80" />
            </div>

        </div>
        <p className={`mt-4 text-xl font-medium text-slate-300 transition-opacity duration-700 ${ phase === 'tagline' || phase === 'exiting' ? 'opacity-100' : 'opacity-0' }`}>
            Automatizando el Futuro.
        </p>
    </div>
  );
};

export default LoadingScreen;