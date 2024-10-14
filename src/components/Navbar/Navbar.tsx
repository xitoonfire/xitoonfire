import  { useState } from 'react';

 export interface NavbarProps {
  links: { name: string; href: string }[];
  logoSrc: string; 
  altText?: string; 
  className?: string;
}

function Navbar({ links, logoSrc, altText = 'Logo', className = '' }: NavbarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-white shadow-md py-4 px-6 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        {}
        <div>
          <img src={logoSrc} alt={altText} className="h-8 w-auto" />
        </div>

        {}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-untbrown-light hover:text-untblue-dark">
              {link.name}
            </a>
          ))}
        </div>

        {}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-untblue">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="block text-untbrown-light hover:text-untblue-dark">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;