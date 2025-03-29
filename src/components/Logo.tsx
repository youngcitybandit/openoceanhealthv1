
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'default', showIcon = true, size = 'md' }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-brand-blue';
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return { logo: 'h-8', text: 'text-xl' };
      case 'lg':
        return { logo: 'h-12', text: 'text-3xl' };
      default: // md
        return { logo: 'h-10', text: 'text-2xl' };
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/5a24503f-4955-4bc4-b6ba-29436a1b5a82.png" 
        alt="PHS Staffing Logo" 
        className={`${sizeClasses.logo} ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;
