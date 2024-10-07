import { ReactNode } from 'react';
interface GridProps {
    children: ReactNode;
    columns?: number;
    gap?: 'none' | 'small' | 'medium' | 'large';
    responsive?: boolean;
}
declare const Grid: ({ children, columns, gap, responsive, }: GridProps) => import("react/jsx-runtime").JSX.Element;
export default Grid;
//# sourceMappingURL=Grid.d.ts.map