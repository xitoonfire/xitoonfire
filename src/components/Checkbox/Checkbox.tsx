import React, { ChangeEvent } from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange, disabled }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;