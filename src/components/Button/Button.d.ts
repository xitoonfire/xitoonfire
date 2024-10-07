export interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded' | 'boxed';
    disabled?: boolean;
    className?: string;
    onClick: () => void;
}
declare function Button({ label, variant, size, shape, // Default shape is rounded
disabled, className, onClick, }: ButtonProps): JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map