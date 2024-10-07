
interface AvatarProps {
  src?: string; // Image URL
  alt?: string; // Alt text for the image
  initials?: string; // Fallback to user's initials if no image is provided
  size?: 'small' | 'medium' | 'large'; // Avatar size
  shape?: 'circle' | 'square'; // Avatar shape
  bgColor?: string; // Background color for initials
}

function Avatar({
  src,
  alt,
  initials,
  size = 'medium',
  shape = 'circle',
  bgColor = '#ccc',
}: AvatarProps) {
  // Explicit size classes
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-12 h-12 text-base',
    large: 'w-16 h-16 text-lg',
  };

  // Explicit shape classes
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