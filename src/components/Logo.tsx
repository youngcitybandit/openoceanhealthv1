
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'default', showIcon = true, size = 'md' }: LogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return { logo: 'h-10' }; // Increased from h-8
      case 'lg':
        return { logo: 'h-16' }; // Increased from h-12
      default: // md
        return { logo: 'h-12' }; // Increased from h-10
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/d7303e27-b6d6-452a-8550-291501a709e5.png" 
        alt="PHS Staffing Logo" 
        className={`${sizeClasses.logo} ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;
