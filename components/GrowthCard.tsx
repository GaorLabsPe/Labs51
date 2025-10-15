import React from 'react';

interface GrowthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GrowthCard: React.FC<GrowthCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#1c1f48] p-8 rounded-2xl border border-transparent hover:border-[#00f0b5]/50 transition-all duration-300 h-full group text-center hover:-translate-y-2">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#8a2be2]/20 to-[#00f0b5]/20 text-[#00f0b5] mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-medium mb-4 text-[#F8F8F9]">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default GrowthCard;