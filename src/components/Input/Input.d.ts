import { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isRequired?: boolean;
}
declare function Input({ type, label, isRequired, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export default Input;
//# sourceMappingURL=Input.d.ts.map