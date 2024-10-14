export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  shadow?: boolean;
  border?: boolean;
  className?: string;
}

function Image({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  rounded = false,
  shadow = false,
  border = false,
  className = '',
}: ImageProps) {
  const baseClasses = 'transition-all';
  const roundedClasses = rounded ? 'rounded-lg' : '';
  const shadowClasses = shadow ? 'shadow-md' : '';
  const borderClasses = border ? 'border border-gray-300' : '';

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${baseClasses} ${roundedClasses} ${shadowClasses} ${borderClasses} ${className}`}
    />
  );
}

export default Image;