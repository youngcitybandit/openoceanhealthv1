
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return { width: 100 };
      case 'lg':
        return { width: 180 };
      default: // md
        return { width: 140 };
    }
  };
  
  const sizeStyle = getSizeClasses();
  
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/cb36f99e-d3fe-4c97-843d-3db2a7be2ce2.png" 
        alt="PHS Staffing Logo" 
        style={sizeStyle}
        className="h-auto"
      />
    </div>
  );
};

export default Logo;
