import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  variant?: 
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'blockquote'
    | 'small'
    | 'bold'
    | 'italic'
    | 'span'
    | 'highlight';
  className?: string;
}

function Text({ children, variant = 'p', className }: TextProps) {
  switch (variant) {
    case 'h1':
      return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
    case 'h4':
      return <h4 className={`text-xl font-medium ${className}`}>{children}</h4>;
    case 'h5':
      return <h5 className={`text-lg font-medium ${className}`}>{children}</h5>;
    case 'h6':
      return <h6 className={`text-base font-medium ${className}`}>{children}</h6>;
    case 'blockquote':
      return <blockquote className={`border-l-4 pl-4 italic ${className}`}>{children}</blockquote>;
    case 'small':
      return <small className={`text-sm ${className}`}>{children}</small>;
    case 'bold':
      return <strong className={`${className}`}>{children}</strong>;
    case 'italic':
      return <em className={`${className}`}>{children}</em>;
    case 'span':
      return <span className={`${className}`}>{children}</span>;
    case 'highlight':
      return <span className={`bg-yellow-300 ${className}`}>{children}</span>; // Highlight styling
    case 'p':
    default:
      return <p className={`text-base ${className}`}>{children}</p>;
  }
}

export default Text;