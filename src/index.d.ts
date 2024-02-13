import { FC } from 'react';

// Define the column interface
interface Column {
  id: string;
  name: string;
}

// Define the props interface for the GridifyDatagrid component
interface GridifyDatagridProps {
  /** Array of initial data to be displayed in the datagrid */
  initialData?: any[];
  /** Array of objects defining the columns of the datagrid */
  columns: Column[];
  /** Callback function to sync data with an external source */
  onSyncData: (data: any[]) => void;
}

// Define the GridifyDatagrid component
declare const GridifyDatagrid: FC<GridifyDatagridProps>;

// Export the GridifyDatagrid component
export default GridifyDatagrid;
