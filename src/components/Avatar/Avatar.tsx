
interface AvatarProps {
    src?: string; 
    alt?: string; 
    initials?: string; 
    size?: 'small' | 'medium' | 'large'; 
    shape?: 'circle' | 'square'; 
    bgColor?: string; 
  }
  
  function Avatar({
    src,
    alt,
    initials,
    size = 'medium',
    shape = 'circle',
    bgColor = '#ccc',
  }: AvatarProps) {
    const sizeClasses = {
      small: 'w-8 h-8 text-sm',
      medium: 'w-12 h-12 text-base',
      large: 'w-16 h-16 text-lg',
    };
  
    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-md';
  
    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-200 overflow-hidden ${shapeClass} ${sizeClasses[size]} ${!src ? `bg-${bgColor}` : ''}`}
      >
        {src ? (
          <img src={src} alt={alt} className="object-cover w-full h-full" />
        ) : (
          <span className="font-semibold text-white">{initials}</span>
        )}
      </div>
    );
  }
  
  export default Avatar;