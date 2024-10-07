import React, { useState } from 'react';

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface FormProps {
  onSubmit: (values: FormValues) => void; // Callback to handle form submission
  className?: string; // Additional custom classes for the form container
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

function Form({ onSubmit, className = '' }: FormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: Partial<FormValues> = {};
    if (!values.name) newErrors.name = 'Name is required';
    if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) newErrors.email = 'Valid email is required';
    if (!values.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      onSubmit(values);
      setIsSubmitting(false);
      setValues(initialValues); // Reset form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 p-4 ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.message ? 'border-red-500' : ''}`}
        />
        {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default Form;