## Gridify Datagrid

Gridify Datagrid is a versatile React component for efficiently displaying tabular data in web applications. It offers a range of powerful features to help you manage and visualize your data effectively.

### Features

1. **Sort, Filter, and Group Data**: Easily sort, filter, and group your data to gain detailed insights.
2. **Summarize and Aggregate Columns**: Aggregate data based on selected columns for deeper analysis.
3. **Customize Cell Height and Width**: Customize the appearance of cells to suit your design requirements.
4. **Hide Columns for Custom Views**: Toggle visibility of columns to create custom views.
5. **Managed State**: Gridify manages state seamlessly, enabling smooth data management.
6. **Zero Config**: No configuration required; all features are enabled by default.
7. **Modern Design**: Carefully crafted for a modern and intuitive user experience.
8. **Data Syncing**: Keep your data in sync with external sources using provided callback functions.

### Installation

You can install Gridify Datagrid via npm:

```bash
npm install gridify-datagrid
```

### Usage

```jsx
import React from 'react';
import GridifyDatagrid from 'gridify-datagrid';

function MyDataGrid() {
  // Define columns and data
  const columns = [
    { id: 0, name: "Name" },
    { id: 1, name: "Description" },
    // Add more columns as needed
  ];

  const data = [
    { id: 0, 0: "Sam Altman", 1: "CEO @ Open AI" },
    { id: 1, 0: "Elon Musk", 1: "CEO @ Tesla" },
    // Add more data rows as needed
  ];

  // Handle data syncing callback
  const handleSyncData = (updatedData) => {
    // Update external data source with updatedData
  };

  return (
    <div>
      <h1>My Data Grid</h1>
      <GridifyDatagrid
        initialData={data}
        columns={columns}
        onSyncData={handleSyncData}
      />
    </div>
  );
}

export default MyDataGrid;
```

### API Reference

#### Props

- `initialData`: An array of objects representing the initial rows of data to be displayed in the datagrid.
- `columns`: An array of objects defining the columns of the datagrid.
- `onSyncData`: A callback function invoked whenever the data in the grid changes due to sorting, filtering, grouping, or aggregation.

### Examples

#### Sorting Data

```jsx
<GridifyDatagrid
  initialData={data}
  columns={columns}
  onSyncData={handleSyncData}
/>
```

#### Filtering Data

```jsx
<GridifyDatagrid
  initialData={data}
  columns={columns}
  onSyncData={handleSyncData}
/>
```

#### Grouping Data

```jsx
<GridifyDatagrid
  initialData={data}
  columns={columns}
  onSyncData={handleSyncData}
/>
```

#### Aggregating Columns

```jsx
<GridifyDatagrid
  initialData={data}
  columns={columns}
  onSyncData={handleSyncData}
/>
```

### License

Gridify Datagrid is licensed under the MIT License.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

### Support

If you encounter any issues or have questions, please [open an issue](https://github.com/iMartinDav/gridify-datagrid/issues) on GitHub.

### Credits

Gridify Datagrid is developed and maintained by @iMartinDav. Special thanks to our contributors.

That's it! You're now ready to supercharge your data app with Gridify Datagrid. Happy coding!
