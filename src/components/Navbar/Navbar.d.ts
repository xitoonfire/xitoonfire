export interface NavbarProps {
    links: {
        name: string;
        href: string;
    }[];
    logoSrc: string;
    altText?: string;
    className?: string;
}
declare function Navbar({ links, logoSrc, altText, className }: NavbarProps): JSX.Element;
export default Navbar;
//# sourceMappingURL=Navbar.d.ts.map