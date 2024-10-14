export interface FooterProps {
    links: { name: string; href: string }[];
    socialMedia?: { name: string; icon: JSX.Element; href: string }[];
    copyright?: string;
    className?: string;
  }
  
  function Footer({ links, socialMedia = [], copyright, className = '' }: FooterProps): JSX.Element {
    return (
      <footer className={`bg-gray-800 text-white py-6 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {}
            <div className="flex space-x-6">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-untblue">
                  {link.name}
                </a>
              ))}
            </div>
  
            {}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialMedia.map((social) => (
                <a key={social.name} href={social.href} className="hover:text-untblue">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
  
          {}
          {copyright && (
            <div className="text-center mt-4 text-gray-400">
              &copy; {new Date().getFullYear()} {copyright}
            </div>
          )}
        </div>
      </footer>
    );
  }
  
  export default Footer;