import { ReactNode } from 'react';
interface ColumnProps {
    children: ReactNode;
    gap?: 'none' | 'small' | 'medium' | 'large';
    alignItems?: 'start' | 'center' | 'end';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
}
declare const Column: ({ children, gap, alignItems, justifyContent, }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export default Column;
//# sourceMappingURL=Column.d.ts.map