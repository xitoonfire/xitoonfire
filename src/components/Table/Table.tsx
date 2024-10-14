import { useState } from 'react';

interface Column {
  header: string; 
  accessor: string;
  width?: string; 
}

export interface TableProps {
  columns: Column[];
  data: Record<string, any>[]; 
}

function Table({ columns, data }: TableProps) {
  const [tableData, setTableData] = useState(data);

  function handleDelete(rowIndex: number) {
    const updatedData = tableData.filter((_, index) => index !== rowIndex);
    setTableData(updatedData);
  }

  return (
    <table className="w-auto table-auto bg-white border mx-auto">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.header}
              style={{ width: column.width || 'auto' }} 
              className="py-2 px-4 border"
            >
              {column.header}
            </th>
          ))}
          <th className="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.header} className="py-2 px-4 border">
                {row[column.accessor]}
              </td>
            ))}
            <td className="py-2 px-4 border text-center">
              <button
                onClick={() => handleDelete(rowIndex)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;