import React from 'react';

interface TextareaProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outlined' | 'filled';
  disabled?: boolean;
  rows?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-3 py-2 text-base',
  large: 'px-4 py-3 text-lg',
};

const variantClasses = {
  default: 'border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500',
  outlined: 'border-2 border-blue-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-600',
  filled: 'bg-gray-100 border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500',
};

const resizeClasses = {
  none: 'resize-none',
  both: 'resize',
  horizontal: 'resize-x',
  vertical: 'resize-y',
};

const Textarea: React.FC<TextareaProps> = ({
  id,
  value,
  onChange,
  placeholder = '',
  size = 'medium',
  variant = 'default',
  disabled = false,
  rows = 4,
  resize = 'both',
}) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`rounded-md shadow-sm focus:outline-none ${sizeClasses[size]} ${variantClasses[variant]} ${
        resizeClasses[resize]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    />
  );
};

export default Textarea;