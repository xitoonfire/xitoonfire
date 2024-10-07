import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  options: SelectOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outlined' | 'filled';
  disabled?: boolean;
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

const Select: React.FC<SelectProps> = ({
  id,
  options,
  value,
  onChange,
  size = 'medium',
  variant = 'default',
  disabled = false,
}) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`block rounded-md shadow-sm focus:outline-none ${sizeClasses[size]} ${variantClasses[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;