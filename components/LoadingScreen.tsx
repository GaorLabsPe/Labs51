import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onAnimationComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onAnimationComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total animation duration before starting the exit animation
    const animationTime = 3000; // 3 seconds for the logo animation and a brief pause
    const exitTime = 500; // 0.5 seconds for the fade-out effect

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, animationTime);

    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, animationTime + exitTime);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#111439] transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative transform scale-125">
         <Logo className="h-24 w-auto" />
      </div>
    </div>
  );
};

export default LoadingScreen;
