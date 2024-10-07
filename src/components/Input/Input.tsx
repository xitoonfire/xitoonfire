import { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
}

function Input({ type = 'text', label, isRequired, ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-2 font-medium">
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isRequired ? 'border-red-500' : 'border-gray-300'
        } w-full max-w-xs`} // Adjust width as needed
        required={isRequired}
        {...props}
      />
    </div>
  );
}

export default Input;