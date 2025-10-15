import React from 'react';

interface AvatarIconProps {
  name: string;
  className?: string;
}

const colors = [
  '#8a2be2', // purple
  '#00f0b5', // teal
  '#ff4757',
  '#2ed573',
  '#ffa502',
  '#1e90ff'
];

const AvatarIcon: React.FC<AvatarIconProps> = ({ name, className }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('');

  // Simple hashing function to get a color from a predefined palette
  const nameToColorIndex = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % colors.length);
  };

  const bgColor = colors[nameToColorIndex(name)];

  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-label={`Avatar for ${name}`}
    >
      <circle cx="50" cy="50" r="50" fill={bgColor} />
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="central" 
        textAnchor="middle" 
        fill="white" 
        fontSize="40" 
        fontFamily="'Poppins', sans-serif"
        fontWeight="600"
      >
        {initials}
      </text>
    </svg>
  );
};

export default AvatarIcon;
