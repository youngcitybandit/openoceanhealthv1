
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
        return { text: 'text-xl', icon: 28 }; // Increased from 24
      case 'lg':
        return { text: 'text-3xl', icon: 42 }; // Increased from 36
      default: // md
        return { text: 'text-2xl', icon: 34 }; // Increased from 28
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-end gap-0.5">
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
