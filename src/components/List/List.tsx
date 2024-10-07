export interface ListProps {
    items: string[]; // Array of items to display
    ordered?: boolean; // Whether the list is ordered (numbered) or unordered (bulleted)
    className?: string; // Additional custom classes for the list
    itemClassName?: string; // Additional custom classes for each list item
  }
  
  function List({
    items,
    ordered = false,
    className = '',
    itemClassName = '',
  }: ListProps) {
    const ListTag = ordered ? 'ol' : 'ul'; // Determines if it's an ordered or unordered list
  
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