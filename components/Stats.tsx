import React, { useState, useEffect, useRef } from 'react';
import TrophyIcon from './icons/TrophyIcon';
import ZapIcon from './icons/ZapIcon';
import UsersIcon from './icons/UsersIcon'; // Reusing this icon

const useCountUp = (end: number, duration: number, isVisible: boolean) => {
    const [count, setCount] = useState(0);
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    useEffect(() => {
        if (!isVisible) return;
        
        let frame = 0;
        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(end * progress);
            
            setCount(currentCount);

            if (frame === totalFrames) {
                clearInterval(counter);
                setCount(end); // Ensure it ends on the exact number
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [end, duration, isVisible]);

    return count;
};

const StatItem: React.FC<{ icon: React.ReactNode; value: number; label: string; isVisible: boolean }> = ({ icon, value, label, isVisible }) => {
    const count = useCountUp(value, 2000, isVisible);
    return (
        <div className="text-center" data-animate-stagger>
            <div className="flex items-center justify-center h-16 w-16 rounded-full gradient-bg text-white mx-auto mb-4">
                {icon}
            </div>
            <p className="text-4xl sm:text-5xl font-bold gradient-text">{count}+</p>
            <p className="text-lg text-slate-300 mt-2">{label}</p>
        </div>
    );
};

const Stats: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const statsData = [
        { icon: <TrophyIcon />, value: 50, label: 'Proyectos Exitosos' },
        { icon: <ZapIcon />, value: 300, label: 'Automatizaciones Creadas' },
        { icon: <UsersIcon />, value: 120, label: 'Clientes Satisfechos' },
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-[#1c1f48]/50" data-animate-section>
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="block text-[#F8F8F9]">Resultados que</span>
                        <span className="gradient-text">Impulsan Negocios</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {statsData.map((stat, index) => (
                       <StatItem key={index} {...stat} isVisible={isVisible} />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
