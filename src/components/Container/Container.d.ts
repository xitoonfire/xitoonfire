import { ReactNode } from 'react';
interface ContainerProps {
    children: ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    center?: boolean;
    padding?: boolean;
    showBoundary?: boolean;
}
declare function Container({ children, maxWidth, center, padding, showBoundary, }: ContainerProps): import("react/jsx-runtime").JSX.Element;
export default Container;
//# sourceMappingURL=Container.d.ts.map