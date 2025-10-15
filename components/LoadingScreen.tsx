import React, { useState, useEffect } from 'react';
import LoadingLogo from './LoadingLogo';

const DURATION = 4000; // Duración total de la animación de carga en ms
const EXIT_DELAY = 500; // Duración de la animación de salida en ms

const LoadingScreen: React.FC<{ onAnimationComplete: () => void }> = ({ onAnimationComplete }) => {
  const [phase, setPhase] = useState('entering');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // --- Temporizadores para la transición de salida y desmontaje ---
    const exitTimer = setTimeout(() => setPhase('exiting'), DURATION);
    const completeTimer = setTimeout(onAnimationComplete, DURATION + EXIT_DELAY);

    // --- Bucle de animación para el progreso ---
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      // El progreso se calcula sobre la duración total para una animación fluida
      const currentProgress = Math.min(1, elapsed / DURATION);
      setProgress(currentProgress);

      if (elapsed < DURATION) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // --- Limpieza de efectos ---
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#111439] transition-opacity duration-500 ease-in-out ${phase === 'exiting' ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative w-80">
        <LoadingLogo className="w-full h-auto" progress={progress} />
        
        {/* Barra de Progreso Sincronizada */}
        <div className="absolute bottom-[-20px] left-0 w-full h-1 bg-slate-700/50 rounded-full overflow-hidden mt-4">
          <div
            className="h-full gradient-bg rounded-full transition-width duration-100 ease-linear"
            style={{ width: `${progress * 100}%` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;