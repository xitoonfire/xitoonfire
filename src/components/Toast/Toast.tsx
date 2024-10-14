import { useEffect } from 'react';

interface ToastProps {
  message: string; 
  type?: 'success' | 'error' | 'warning' | 'info'; 
  duration?: number; 
  onClose?: () => void; 
}

function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const toastTypeMap: { [key: string]: string } = {
    success: 'bg-green-100 text-green-700 border-green-400',
    error: 'bg-red-100 text-red-700 border-red-400',
    warning: 'bg-yellow-100 text-yellow-700 border-yellow-400',
    info: 'bg-blue-100 text-blue-700 border-blue-400',
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer); 
  }, [duration, onClose]);

  return (
    <div className={`border-l-4 p-4 ${toastTypeMap[type]} rounded-md shadow-lg fixed bottom-4 right-4 z-50`}>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="absolute top-2.5 right--3 mt-2 mr-2 text-lg font-bold leading-none focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
}

export default Toast;