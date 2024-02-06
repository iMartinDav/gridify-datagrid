// src/index.js
import React from "react";
import "./GridifyDatagrid.css";

/**
 * Gridify Datagrid Component
 *
 * Gridify is built with React and works with all React frameworks.
 * It supports both client-side rendering (CSR) and server-side rendering (SSR).
 * Integration as a React component, Next.js, Gatsby, and Vite.
 *
 * @param {Array} data - Array of objects representing the rows of data to be displayed in the datagrid.
 * @param {Array} columns - Array of objects defining the columns of the datagrid.
 * @returns {JSX.Element} - Returns the Gridify datagrid component.
 */

function GridifyDatagrid({ initialData = [], columns, cellHeight = 30, cellWidth = 150 }) {
  // State variables for managing data, sorting, filtering, grouping, and hidden columns
  const [data, setData] = useState(initialData);
  const [sortedData, setSortedData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState(null);
  const [filterConfig, setFilterConfig] = useState({});
  const [groupedData, setGroupedData] = useState([]);
  const [isGrouped, setIsGrouped] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [aggregatedColumns, setAggregatedColumns] = useState([]);

  // useEffect hook to update data when initialData prop changes
  useEffect(() => {
    setData(initialData);
    setSortedData(initialData);
  }, [initialData]);

  // Function to handle sorting based on column values
  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  // Function to handle filtering data based on specific criteria
  const requestFilter = (key, value) => {
    setFilterConfig({ ...filterConfig, [key]: value });
  };

  // Function to handle grouping data based on selected column values
  const requestGroup = (key) => {
    if (key) {
      const grouped = data.reduce((acc, obj) => {
        const groupKey = obj[key];
        acc[groupKey] = [...(acc[groupKey] || []), obj];
        return acc;
      }, {});
      setGroupedData(grouped);
      setIsGrouped(true);
    } else {
      setGroupedData([]);
      setIsGrouped(false);
    }
  };

  // Function to handle column visibility
  const toggleColumnVisibility = (columnId) => {
    setHiddenColumns((prevHiddenColumns) =>
      prevHiddenColumns.includes(columnId)
        ? prevHiddenColumns.filter((id) => id !== columnId)
        : [...prevHiddenColumns, columnId]
    );
  };

  // Function to toggle aggregation for a column
  const toggleAggregatedColumn = (columnId) => {
    setAggregatedColumns((prevAggregatedColumns) =>
      prevAggregatedColumns.includes(columnId)
        ? prevAggregatedColumns.filter((id) => id !== columnId)
        : [...prevAggregatedColumns, columnId]
    );
  };

  // Function to aggregate data for aggregated columns
  const aggregateData = (groupedData) => {
    return Object.keys(groupedData).map((key) => {
      const group = groupedData[key];
      const aggregatedValues = aggregatedColumns.reduce((acc, columnId) => {
        const columnSum = group.reduce((sum, obj) => sum + obj[columnId], 0);
        return { ...acc, [columnId]: columnSum };
      }, {});
      return { group: key, ...aggregatedValues };
    });
  };

  // Memoize sorted and filtered data
  const filteredData = useMemo(() => {
    return sortedData.filter((row) => {
      for (const key in filterConfig) {
        if (row[key] !== filterConfig[key]) {
          return false;
        }
      }
      return true;
    });
  }, [sortedData, filterConfig]);

  // Memoize grouped and aggregated data
  const aggregatedData = useMemo(() => {
    if (isGrouped) {
      return aggregateData(groupedData);
    } else {
      return [];
    }
  }, [groupedData, isGrouped, aggregatedColumns]);

  // Render the component
  return (
    <div className="gridify-datagrid-container">
      <table className="gridify-datagrid-table">
        <thead>
          <tr>
            {/* Render column headers with sorting functionality */}
            {columns.map((column) =>
              !hiddenColumns.includes(column.id) ? (
                <th
                  key={column.id}
                  onClick={() => requestSort(column.id)}
                  className="gridify-datagrid-header"
                >
                  {column.name}
                  {/* Show sorting direction indicator */}
                  {sortConfig && sortConfig.key === column.id && (
                    <span>
                      {sortConfig.direction === "ascending" ? "↑" : "↓"}
                    </span>
                  )}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {/* Render rows based on filtered data */}
          {filteredData.map((row) => (
            <tr key={row.id}>
              {/* Render cells based on visible columns */}
              {columns
                .filter((column) => !hiddenColumns.includes(column.id))
                .map((column) => (
                  <td
                    key={column.id}
                    className="gridify-datagrid-cell"
                    style={{
                      height: `${cellHeight}px`, // Apply custom cell height
                      width: `${cellWidth}px`, // Apply custom cell width
                    }}
                  >
                    {row[column.id]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render controls to toggle column visibility */}
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
      {/* Render controls to toggle column aggregation */}
      <div className="gridify-datagrid-controls">
        <h3>Toggle Column Aggregation</h3>
        <div className="gridify-datagrid-checkboxes">
          {columns.map((column) => (
            <label key={column.id} className="gridify-datagrid-checkbox-label">
              <input
                type="checkbox"
                checked={aggregatedColumns.includes(column.id)}
                onChange={() => toggleAggregatedColumn(column.id)}
                disabled={!isGrouped} // Disable aggregation toggle if grouping is not enabled
                className="gridify-datagrid-checkbox"
              />
              {column.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridifyDatagrid;
