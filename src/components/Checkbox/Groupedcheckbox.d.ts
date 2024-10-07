interface CheckboxGroupProps {
    checkboxes: {
        id: string;
        label: string;
        checked: boolean;
        disabled?: boolean;
    }[];
    onChange: (id: string) => void;
}
declare function CheckboxGroup({ checkboxes, onChange }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export default CheckboxGroup;
//# sourceMappingURL=Groupedcheckbox.d.ts.map