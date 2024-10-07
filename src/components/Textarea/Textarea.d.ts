import React from 'react';
interface TextareaProps {
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'outlined' | 'filled';
    disabled?: boolean;
    rows?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}
declare const Textarea: React.FC<TextareaProps>;
export default Textarea;
//# sourceMappingURL=Textarea.d.ts.map