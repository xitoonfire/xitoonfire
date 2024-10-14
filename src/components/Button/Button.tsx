export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'boxed'; 
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

function Button({
  label,
  variant = 'primary',
  size = 'medium',
  shape = 'rounded', 
  disabled = false,
  className = '',
  onClick,
}: ButtonProps): JSX.Element {
  const buttonClass = `
    ${variant === 'primary' ? 'bg-untblue text-untbrown-light hover:bg-untblue-dark' : 'bg-untbrown text-untblue-light hover:bg-untbrown-dark'}
    ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'}
    ${shape === 'rounded' ? 'rounded-full' : 'rounded-none'}  // Apply shape based on prop
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    px-4 py-2 ${className}
  `;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;