import { ReactNode } from 'react';

interface ColumnProps {
  children: ReactNode;
  gap?: 'none' | 'small' | 'medium' | 'large'; 
  alignItems?: 'start' | 'center' | 'end'; 
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around'; 
}

const gapMap: { [key: string]: string } = {
  none: 'gap-0',
  small: 'gap-2',
  medium: 'gap-4',
  large: 'gap-6',
};

const alignItemsMap: { [key: string]: string } = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
};

const justifyContentMap: { [key: string]: string } = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

const Column = ({
  children,
  gap = 'medium',
  alignItems = 'start',
  justifyContent = 'start',
}: ColumnProps) => {
  return (
    <div
      className={`flex flex-col ${gapMap[gap]} ${alignItemsMap[alignItems]} ${justifyContentMap[justifyContent]} bg-gray-100`}
    >
      {children}
    </div>
  );
};

export default Column;