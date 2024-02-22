// types.ts

export interface DataItem {
  id: number;
  name: string;
  age: number;
  city: string;
  department: string;
  position: string;
  salary: number;
}

export interface Column {
  header: string;
  key: keyof DataItem;
}
