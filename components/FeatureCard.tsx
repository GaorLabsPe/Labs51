
import React from 'react';
import CheckIcon from './icons/CheckIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, items }) => {
  return (
    <div className="bg-[#1c1f48] p-8 rounded-2xl border border-transparent hover:border-[#8a2be2]/50 transition-all duration-300 h-full group hover:-translate-y-2">
      <div className="flex items-center justify-center h-16 w-16 rounded-full gradient-bg text-white mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-medium text-center mb-6 text-[#F8F8F9]">{title}</h3>
      <ul className="space-y-3 text-left">
        {items.map((item, index) => (
          <li key={index} className="flex items-start group/item">
            <div className="text-[#00f0b5] mr-3 pt-1 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-white">
              <CheckIcon />
            </div>
            <span className="text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;