import React, { ChangeEvent } from 'react';
interface RadioButtonProps {
    id: string;
    label: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}
declare const RadioButton: React.FC<RadioButtonProps>;
export default RadioButton;
//# sourceMappingURL=Radiobutton.d.ts.map