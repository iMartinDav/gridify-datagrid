// src/index.js
import React from 'react';

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
  return (
    <div className="gridify-datagrid">
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.id}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              {columns.map(column => (
                <td key={column.id}>{row[column.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GridifyDatagrid;
