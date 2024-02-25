// src/index.tsx
import React, { useState, useEffect, useMemo } from 'react';
import './GridifyDatagrid.css';

interface Column {
  id: string;
  name: string;
}

interface GridifyDatagridProps {
  /** Array of initial data to be displayed in the datagrid */
  initialData?: unknown[];
  /** Array of objects defining the columns of the datagrid */
  columns: Column[];
  /** Callback function to sync data with an external source */
  onSyncData: (data: unknown[]) => void;
}

/**
 * Gridify Datagrid Component
 *
 * Gridify is a versatile datagrid component built with React. It supports sorting, filtering,
 * grouping, and aggregation of data. It is designed to work seamlessly with React frameworks
 * including Next.js, Gatsby, and Vite, supporting both client-side and server-side rendering.
 *
 * @param {GridifyDatagridProps} props - Props for configuring the Gridify datagrid.
 * @returns {JSX.Element} - Returns the Gridify datagrid component.
 */
const GridifyDatagrid: React.FC<GridifyDatagridProps> = ({
  initialData = [],
  columns,
  onSyncData,
}) => {
  // State variables for managing data, sorting, filtering, grouping, and hidden columns
  const [data, setData] = useState(initialData);
  const [sortedData, setSortedData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
  const [filterConfig, setFilterConfig] = useState<{ [key: string]: any }>({});
  const [groupedData, setGroupedData] = useState<{ [key: string]: any[] }>({});
  const [isGrouped, setIsGrouped] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [aggregatedColumns, setAggregatedColumns] = useState<string[]>([]);

  // useEffect hook to update data when initialData prop changes
  useEffect(() => {
    setData(initialData);
    setSortedData(initialData);
  }, [initialData]);

  // Function to handle sorting based on column values
  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sorted = [...data].sort((a: unknown, b: unknown) => {
      if (
        !Object.prototype.hasOwnProperty.call(a, key) ||
        !Object.prototype.hasOwnProperty.call(b, key)
      ) {
        return 0;
      }
      if ((a as any)[key] < (b as any)[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if ((a as any)[key] > (b as any)[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    setSortedData(sorted);
    setSortConfig({ key, direction });
    onSyncData(sorted);
  };

  // Function to handle filtering data based on specific criteria
  const requestFilter = (key: string, value: any) => {
    setFilterConfig({ ...filterConfig, [key]: value });
  };

  // Function to handle grouping data based on selected column values
  const requestGroup = (key: string, data: { [key: string]: any }[]) => {
    if (key && Array.isArray(data)) {
      const grouped: { [key: string]: any[] } = data.reduce((acc: any, obj: any) => {
        const groupKey = obj[key];
        acc[groupKey] = [...(acc[groupKey] || []), obj];
        return acc;
      }, {});
      setGroupedData(grouped);
      setIsGrouped(true);
    } else {
      setGroupedData({});
      setIsGrouped(false);
    }
  };

  // Function to handle column visibility
  const toggleColumnVisibility = (columnId: string) => {
    setHiddenColumns((prevHiddenColumns) =>
      prevHiddenColumns.includes(columnId)
        ? prevHiddenColumns.filter((id) => id !== columnId)
        : [...prevHiddenColumns, columnId]
    );
  };

  // Function to toggle aggregation for a column
  const toggleAggregatedColumn = (columnId: string) => {
    setAggregatedColumns((prevAggregatedColumns) =>
      prevAggregatedColumns.includes(columnId)
        ? prevAggregatedColumns.filter((id) => id !== columnId)
        : [...prevAggregatedColumns, columnId]
    );
  };

  // Function to aggregate data for aggregated columns
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const aggregateData = useMemo(() => {
    return Object.keys(groupedData).map((key) => {
      const group = groupedData[key];
      const aggregatedValues = aggregatedColumns.reduce((acc: any, columnId: string) => {
        const columnSum = group.reduce((sum: number, obj: any) => sum + obj[columnId], 0);
        return { ...acc, [columnId]: columnSum };
      }, {});
      return { group: key, ...aggregatedValues };
    });
  }, [groupedData, aggregatedColumns]);

  // Memoize sorted and filtered data
  const filteredData = useMemo(() => {
    return sortedData.filter((row: any) => {
      // Add type annotation for 'row'
      for (const key in filterConfig) {
        if (row[key] !== filterConfig[key]) {
          return false;
        }
      }
      return true;
    });
  }, [sortedData, filterConfig]);

  // Render the component
  return (
    <div className="gridify-datagrid-container">
      <table className="gridify-datagrid-table">
        <thead>
          <tr>
            {columns.map((column) =>
              !hiddenColumns.includes(column.id) ? (
                <th
                  key={column.id}
                  onClick={() => requestSort(column.id)}
                  className="gridify-datagrid-header"
                >
                  {column.name}
                  {sortConfig && sortConfig.key === column.id && (
                    <span>{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {columns
                .filter((column) => !hiddenColumns.includes(column.id))
                .map((column, colIndex) => (
                  <td key={colIndex} className="gridify-datagrid-cell">
                    {row[column.id]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="gridify-datagrid-controls">
        <h3>Toggle Column Visibility</h3>
        <div className="gridify-datagrid-checkboxes">
          {columns.map((column) => (
            <label key={column.id} className="gridify-datagrid-checkbox-label">
              <input
                type="checkbox"
                checked={!hiddenColumns.includes(column.id)}
                onChange={() => toggleColumnVisibility(column.id)}
                className="gridify-datagrid-checkbox"
              />
              {column.name}
            </label>
          ))}
        </div>
      </div>
      <div className="gridify-datagrid-controls">
        <h3>Toggle Column Aggregation</h3>
        <div className="gridify-datagrid-checkboxes">
          {columns.map((column) => (
            <label
              key={column.id}
              className="gridify-datagrid-checkbox-label"
              style={{ opacity: isGrouped ? 1 : 0.5 }}
            >
              <input
                type="checkbox"
                checked={aggregatedColumns.includes(column.id)}
                onChange={() => toggleAggregatedColumn(column.id)}
                disabled={!isGrouped}
                className="gridify-datagrid-checkbox"
              />
              {column.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridifyDatagrid;
