import React from 'react';
export interface TextProps {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'blockquote' | 'small' | 'bold' | 'italic' | 'span' | 'highlight';
    className?: string;
}
declare function Text({ children, variant, className }: TextProps): import("react/jsx-runtime").JSX.Element;
export default Text;
//# sourceMappingURL=Text.d.ts.map