
import React from 'react';
import { Button } from '@/components/ui/button';

interface LogoProps {
  variant?: 'default' | 'white';
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'default', showIcon = true, size = 'md' }: LogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return { logo: 'h-14' }; 
      case 'lg':
        return { logo: 'h-24' }; 
      default: // md
        return { logo: 'h-20' }; 
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/79b538f7-f3bb-4657-a52a-d6a5d35253ab.png" 
        alt="OpenOceanHealth Logo" 
        className={`${sizeClasses.logo} ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
      <Button 
        variant="ghost" 
        className={`text-lg font-medium ${
          variant === 'white' 
            ? 'text-white' 
            : 'bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent hover:from-brand-blue hover:to-brand-teal'
        }`}
      >
        OpenOceanHealth
      </Button>
    </div>
  );
};

export default Logo;

