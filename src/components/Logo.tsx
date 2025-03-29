
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
        return { logo: 'h-8' };
      case 'lg':
        return { logo: 'h-12' };
      default: // md
        return { logo: 'h-10' };
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/68491041-500d-4792-8957-42bf64decf38.png" 
        alt="PHS Staffing Logo" 
        className={`${sizeClasses.logo} ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;
