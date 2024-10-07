interface RadioButtonGroupProps {
    name: string;
    options: {
        id: string;
        label: string;
        value: string;
        checked: boolean;
        disabled?: boolean;
    }[];
    onChange: (value: string) => void;
}
declare function RadioButtonGroup({ name, options, onChange }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
export default RadioButtonGroup;
//# sourceMappingURL=Groupedradiobutton.d.ts.map