import React from 'react';

const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 14.725C13 11.588 15.588 9 18.725 9H19V7H18.725C14.484 7 11 10.484 11 14.725V17H16V14.725H13ZM5 14.725C5 11.588 7.588 9 10.725 9H11V7H10.725C6.484 7 3 10.484 3 14.725V17H8V14.725H5Z" />
  </svg>
);

export default QuoteIcon;