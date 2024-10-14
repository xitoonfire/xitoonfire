import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: 'none' | 'small' | 'medium' | 'large';
  responsive?: boolean;
}

const columnMap: { [key: number]: string } = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const gapMap: { [key: string]: string } = {
  none: 'gap-0',
  small: 'gap-2',
  medium: 'gap-4',
  large: 'gap-6',
};

const Grid = ({
  children,
  columns = 3,
  gap = 'medium',
  responsive = false,
}: GridProps) => {
  const columnClasses = columnMap[columns] || 'grid-cols-3'; 
  
  const responsiveClasses = responsive
    ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    : '';

  return (
    <div className={`grid ${columnClasses} ${responsiveClasses} ${gapMap[gap]} bg-gray-100`}>
      {children}
    </div>
  );
};

export default Grid;