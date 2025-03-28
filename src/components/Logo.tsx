
import React from 'react';
import { Building, Shield, Briefcase } from 'lucide-react';

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
        return { text: 'text-xl', icon: 20 };
      case 'lg':
        return { text: 'text-3xl', icon: 32 };
      default: // md
        return { text: 'text-2xl', icon: 24 };
    }
  };
  
  const sizeClasses = getSizeClasses();
  
  return (
    <div className="flex items-center gap-2">
      {showIcon && (
        <div className="relative">
          <Shield 
            className="text-brand-blue" 
            size={sizeClasses.icon} 
            strokeWidth={2}
          />
          <Building 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-teal" 
            size={sizeClasses.icon * 0.6} 
            strokeWidth={2.5}
          />
        </div>
      )}
      <span className={`font-bold ${sizeClasses.text} ${textColor} tracking-tighter`}>PHS</span>
    </div>
  );
};

export default Logo;
