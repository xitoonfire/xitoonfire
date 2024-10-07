import React, { ChangeEvent } from 'react';
interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map