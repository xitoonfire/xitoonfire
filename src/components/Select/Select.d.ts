import React from 'react';
interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps {
    id: string;
    options: SelectOption[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'outlined' | 'filled';
    disabled?: boolean;
}
declare const Select: React.FC<SelectProps>;
export default Select;
//# sourceMappingURL=Select.d.ts.map