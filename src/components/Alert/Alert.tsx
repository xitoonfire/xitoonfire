import { ReactNode } from 'react';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info'; // Type of alert
  children: ReactNode; // Content inside the alert
  dismissible?: boolean; // Whether the alert can be dismissed
  onClose?: () => void; // Callback when the alert is dismissed
}

function Alert({
  type = 'info',
  children,
  dismissible = false,
  onClose,
}: AlertProps) {
  const alertTypeMap: { [key: string]: string } = {
    success: 'bg-green-100 text-green-700 border-green-400',
    error: 'bg-red-100 text-red-700 border-red-400',
    warning: 'bg-yellow-100 text-yellow-700 border-yellow-400',
    info: 'bg-blue-100 text-blue-700 border-blue-400',
  };

  return (
    <div className={`border-l-4 p-4 ${alertTypeMap[type]} rounded relative`}>
      <span>{children}</span>
      {dismissible && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-lg font-bold leading-none focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
}

export default Alert;