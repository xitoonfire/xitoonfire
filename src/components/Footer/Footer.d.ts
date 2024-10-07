export interface FooterProps {
    links: {
        name: string;
        href: string;
    }[];
    socialMedia?: {
        name: string;
        icon: JSX.Element;
        href: string;
    }[];
    copyright?: string;
    className?: string;
}
declare function Footer({ links, socialMedia, copyright, className }: FooterProps): JSX.Element;
export default Footer;
//# sourceMappingURL=Footer.d.ts.map