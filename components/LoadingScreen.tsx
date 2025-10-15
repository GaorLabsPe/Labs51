import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const LoadingScreen: React.FC<{ onAnimationComplete: () => void }> = ({ onAnimationComplete }) => {
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    const timers: number[] = [];
    
    // Duración extendida para una animación más lenta y profesional.
    timers.push(setTimeout(() => setPhase('exiting'), 4000)); // Iniciar la salida después de 4s
    timers.push(setTimeout(onAnimationComplete, 4500));      // Completar y desmontar después de 4.5s

    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#111439] transition-opacity duration-500 ease-in-out ${phase === 'exiting' ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative w-80">
        <Logo className="w-full h-auto" />
        
        {/* Barra de Progreso */}
        <div className="absolute bottom-[-20px] left-0 w-full h-1 bg-slate-700/50 rounded-full overflow-hidden mt-4">
          <div
            className="h-full gradient-bg rounded-full"
            style={{ animation: `fill-progress 3.6s ease-out 0.2s forwards` }} // Animación más lenta
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;