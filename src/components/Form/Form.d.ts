export interface FormValues {
    name: string;
    email: string;
    message: string;
}
export interface FormProps {
    onSubmit: (values: FormValues) => void;
    className?: string;
}
declare function Form({ onSubmit, className }: FormProps): import("react/jsx-runtime").JSX.Element;
export default Form;
//# sourceMappingURL=Form.d.ts.map