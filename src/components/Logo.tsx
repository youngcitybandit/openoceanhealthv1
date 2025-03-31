
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
        return { logo: 'h-12' }; // Increased from h-10
      case 'lg':
        return { logo: 'h-20' }; // Increased from h-16
      default: // md
        return { logo: 'h-16' }; // Increased from h-12
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-center gap-4">
      <img 
        src="/lovable-uploads/79b538f7-f3bb-4657-a52a-d6a5d35253ab.png" 
        alt="Open Ocean Health Logo" 
        className={`${sizeClasses.logo} ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
      <Button 
        variant="ghost" 
        className={`text-lg font-medium ${variant === 'white' ? 'text-white' : 'text-brand-blue'}`}
      >
        Open Ocean Health
      </Button>
    </div>
  );
};

export default Logo;
