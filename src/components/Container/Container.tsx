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
    'w-full',         // Full width of the container
    'mx-auto',        // Center horizontally
    maxWidthClasses[maxWidth], // Max width based on prop
    center && 'flex justify-center', // Center content if true
    padding && 'px-4 sm:px-6 lg:px-8', // Add padding if true
    showBoundary && 'bg-gray-100 border border-gray-300', // Show boundary if true
  ]
    .filter(Boolean) // Remove falsy values
    .join(' ');      // Join classes with space

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Container;