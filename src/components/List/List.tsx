export interface ListProps {
    items: string[]; 
    ordered?: boolean; 
    className?: string; 
    itemClassName?: string; 
  }
  
  function List({
    items,
    ordered = false,
    className = '',
    itemClassName = '',
  }: ListProps) {
    const ListTag = ordered ? 'ol' : 'ul'; 
  
    return (
      <ListTag className={`list-none ${className}`}>
        {items.map((item, index) => (
          <li key={index} className={`flex items-center space-x-2 ${itemClassName}`}>
            <span>{item}</span>
          </li>
        ))}
      </ListTag>
    );
  }
  
  export default List;