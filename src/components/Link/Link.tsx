
export interface LinkProps {
    href: string;
    text: string;
    external?: boolean;
    underline?: boolean;
    className?: string;
  }
  
  function Link({
    href,
    text,
    external = false,
    underline = false,
    className = '',
  }: LinkProps) {
    const baseClasses = 'text-blue-600 transition-colors duration-300';
    const underlineClasses = underline ? 'underline' : '';
  
    return (
      <a
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} ${underlineClasses} ${className}`}
      >
        {text}
      </a>
    );
  }
  
  export default Link;