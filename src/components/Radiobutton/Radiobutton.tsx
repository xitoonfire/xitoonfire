import React, { ChangeEvent } from 'react';

interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
