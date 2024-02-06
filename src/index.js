// src/index.js
import React from "react";

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
function GridifyDatagrid({ data, columns }) {
  // State variables for managing sorting, filtering, grouping, and hidden columns
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState(null);
  const [filterConfig, setFilterConfig] = useState({});
  const [groupedData, setGroupedData] = useState([]);
  const [isGrouped, setIsGrouped] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState([]); // New state for hidden columns

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

  // Function to aggregate grouped data (example: sum)
  const aggregateData = (groupedData) => {
    return Object.keys(groupedData).map((key) => {
      const group = groupedData[key];
      const sum = group.reduce((acc, obj) => acc + obj["value"], 0);
      return { group: key, sum };
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
  }, [groupedData, isGrouped]);

  // Render the component
  return (
    <div className="gridify-datagrid">
      <table>
        <thead>
          <tr>
            {columns.map((column) =>
              !hiddenColumns.includes(column.id) ? (
                <th
                  key={column.id}
                  onClick={() => requestSort(column.id)}
                  style={{ cursor: "pointer" }}
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
                  <td key={column.id}>{row[column.id]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isGrouped && (
        <div>
          <h2>Aggregated Data</h2>
          <table>
            <thead>
              <tr>
                <th>Group</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              {/* Render aggregated data rows */}
              {aggregatedData.map((item) => (
                <tr key={item.group}>
                  <td>{item.group}</td>
                  <td>{item.sum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Render controls to toggle column visibility */}
      <div style={{ marginTop: "20px" }}>
        <h3>Toggle Column Visibility</h3>
        <div>
          {columns.map((column) => (
            <label key={column.id} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={!hiddenColumns.includes(column.id)}
                onChange={() => toggleColumnVisibility(column.id)}
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
