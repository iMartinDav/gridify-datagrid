// MyDataGridDemo.tsx

import React, { useState } from 'react';
import GridifyDatagrid from 'gridify-datagrid';
import { sampleData } from './data';
import { Column as ImportedColumn, DataItem, Column } from './types';

interface MyDataGridDemo {
  initialData?: DataItem[];
  columns: Column[];
  onSyncData: (data: DataItem[]) => void;
  enableSorting?: boolean;
}

const MyDataGridDemo: React.FC = () => {
  const [data, setData] = useState(sampleData);

  const columns: Column[] = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Age', key: 'age' },
    { header: 'City', key: 'city' },
    { header: 'Department', key: 'department' },
    { header: 'Position', key: 'position' },
    { header: 'Salary', key: 'salary' },
  ];

  const handleSyncData = (updatedData: DataItem[]) => {
    setData(updatedData);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Data Grid Demo</h1>
      <h2 className="text-xl font-bold mb-2">Sorting Data</h2>
      <GridifyDatagrid
        initialData={data}
        columns={columns}
        onSyncData={handleSyncData}
        enableSorting={true}
      />
      <h2 className="text-xl font-bold mb-2">Filtering Data</h2>
      <GridifyDatagrid
        initialData={data}
        columns={columns}
        onSyncData={handleSyncData}
        enableFiltering={true}
      />
      <h2 className="text-xl font-bold mb-2">Grouping Data</h2>
      <GridifyDatagrid
        initialData={data}
        columns={columns}
        onSyncData={handleSyncData}
        enableGrouping={true}
      />
      <h2 className="text-xl font-bold mb-2">Aggregating Columns</h2>
      <GridifyDatagrid
        initialData={data}
        columns={columns}
        onSyncData={handleSyncData}
        enableAggregation={true}
      />
    </div>
  );
};

export default MyDataGridDemo;
