
import React from 'react';
import { Palmtree } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'white';
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'default', showIcon = true, size = 'md' }: LogoProps) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-brand-blue';
  const iconColor = variant === 'white' ? 'text-white' : 'text-brand-teal';
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return { text: 'text-xl', icon: 24 }; // Increased from 20
      case 'lg':
        return { text: 'text-3xl', icon: 36 }; // Increased from 32
      default: // md
        return { text: 'text-2xl', icon: 28 }; // Increased from 24
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-end gap-1">
      {showIcon && (
        <Palmtree 
          className={iconColor} 
          size={sizeClasses.icon} 
          strokeWidth={2}
        />
      )}
      <span className={`font-bold ${sizeClasses.text} ${textColor} tracking-tighter`}>PHS</span>
    </div>
  );
};

export default Logo;
