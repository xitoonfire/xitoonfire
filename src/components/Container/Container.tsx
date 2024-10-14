import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  center?: boolean;
  padding?: boolean;
  showBoundary?: boolean;
}

function Container({
  children,
  maxWidth = 'xl',
  center = false,
  padding = true,
  showBoundary = false,
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  const className = [
    'w-full',         
    'mx-auto',       
    maxWidthClasses[maxWidth], 
    center && 'flex justify-center',
    padding && 'px-4 sm:px-6 lg:px-8', 
    showBoundary && 'bg-gray-100 border border-gray-300', 
  ]
    .filter(Boolean) 
    .join(' ');      

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Container;