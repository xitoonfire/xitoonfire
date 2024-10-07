interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    onClose?: () => void;
}
declare function Toast({ message, type, duration, onClose }: ToastProps): import("react/jsx-runtime").JSX.Element;
export default Toast;
//# sourceMappingURL=Toast.d.ts.map