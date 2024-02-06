// src/index.js
import React from 'react';

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
