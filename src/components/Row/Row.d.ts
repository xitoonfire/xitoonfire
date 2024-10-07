import { ReactNode } from 'react';
interface RowProps {
    children: ReactNode;
    gap?: 'none' | 'small' | 'medium' | 'large';
    alignItems?: 'start' | 'center' | 'end';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
}
declare const Row: ({ children, gap, alignItems, justifyContent, }: RowProps) => import("react/jsx-runtime").JSX.Element;
export default Row;
//# sourceMappingURL=Row.d.ts.map