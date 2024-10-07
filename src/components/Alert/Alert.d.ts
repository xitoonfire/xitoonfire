import { ReactNode } from 'react';
interface AlertProps {
    type?: 'success' | 'error' | 'warning' | 'info';
    children: ReactNode;
    dismissible?: boolean;
    onClose?: () => void;
}
declare function Alert({ type, children, dismissible, onClose, }: AlertProps): import("react/jsx-runtime").JSX.Element;
export default Alert;
//# sourceMappingURL=Alert.d.ts.map