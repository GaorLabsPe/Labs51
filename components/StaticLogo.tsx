import React from 'react';

const StaticLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Labs51 Logo"
    >
      <defs>
        <linearGradient id="logo-gradient-prime" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop stopColor="#8A2BE2" />
          <stop offset="1" stopColor="#00F0B5" />
        </linearGradient>
      </defs>
      
      {/* Icon Group: Flask */}
      <g>
        {/* Liquid Fill - represented as a solid path */}
        <path 
            d="M13 11L3 39C2.5 40.5 4 42 5.5 42H40.5C42 42 43.5 40.5 43 39L33 11V6C33 4.34315 31.6569 3 30 3H16C14.3431 3 13 4.34315 13 6V11Z"
            fill="url(#logo-gradient-prime)"
        />
        
        {/* Flask Glass Outline */}
        <path 
          d="M30 3H16C14.3431 3 13 4.34315 13 6V11L3 39C2.5 40.5 4 42 5.5 42H40.5C42 42 43.5 40.5 43 39L33 11V6C33 4.34315 31.6569 3 30 3Z" 
          stroke="#8A2BE2"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        {/* Glass Highlight */}
        <path 
          d="M31 8C27 20 33 30 24 41"
          stroke="white" 
          strokeOpacity="0.1" 
          strokeWidth="2"
        />
      </g>
      
      {/* Text Group */}
      <g>
        <text 
          x="55" 
          y="37" 
          fill="#F8F8F9" 
          fontFamily="'Aldrich', sans-serif" 
          fontWeight="400"
          letterSpacing="0.02em"
          fontSize="32"
        >
          LABS
        </text>
        <text 
          x="138" 
          y="37" 
          fill="url(#logo-gradient-prime)" 
          fontFamily="'Poppins', sans-serif" 
          fontWeight="700"
          fontSize="38"
        >
          51
        </text>
      </g>
    </svg>
  );
};

export default StaticLogo;
