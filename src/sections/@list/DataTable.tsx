import { useMemo } from 'react';
import {
  Button,
  Box
} from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import Iconify from '../../components/iconify';

type DataTableProps = {
  search?: string
};

type Task = {
  task_name: string;
  description: string;
  user: string;
  importance: string;
  phase: string;
  date: string;
  price: string;
};

export default function DataTable({ search }:DataTableProps) {
  const columns = useMemo<MRT_ColumnDef<Task>[]>(
    () => [
      {
        accessorKey: 'task_name',
        header: 'Task Name',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Iconify icon={'eva:clock-outline'} sx={{ marginTop: 0.2, marginRight: 0.5 }} />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'description',
        header: 'Description',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Iconify icon={'eva:clock-outline'} sx={{ marginTop: 0.2, marginRight: 0.5 }} />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'user',
        header: 'User',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex'
            }}
          >
            <img
              alt="avatar"
              height={30}
              src='/assets/images/avatars/avatar_1.jpg'
              loading="lazy"
              style={{ borderRadius: '50%' }}
            />
            <div style={{ marginLeft: '5px', marginTop: '5px' }}>{renderedCellValue}</div>
          </Box>
        ),
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Iconify icon={'eva:clock-outline'} sx={{ marginTop: 0.2, marginRight: 0.5 }} />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'importance',
        header: 'Importance',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              textAlign: 'center',
              bgcolor: renderedCellValue === 'Very important' ? '#FFB7B7' : renderedCellValue === 'Standard' ? '#FFEBB7' : 'white',
              borderRadius: '20px'
            }}
          >
            {renderedCellValue}
          </Box>
        ),
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Iconify icon={'eva:clock-outline'} sx={{ marginTop: 0.2, marginRight: 0.5 }} />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'phase',
        header: 'Phase',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              textAlign: 'center',
              bgcolor: renderedCellValue === 'Done' ? '#B7FFBA' : renderedCellValue === 'In progress' ? '#FFEBB7' : 'white',
              borderRadius: '20px'
            }}
          >
            {renderedCellValue}
          </Box>
        ),
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Iconify icon={'eva:clock-outline'} sx={{ marginTop: 0.2, marginRight: 0.5 }} />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'date',
        header: 'Date',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Iconify icon={'eva:clock-outline'} sx={{ marginTop: 0.2, marginRight: 0.5 }} />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'price',
        header: 'Price',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Iconify icon={'eva:clock-outline'} sx={{ marginTop: 0.2, marginRight: 0.5 }} />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      }
    ],
    [],
  );

  const data: Task[] = [
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'John',
      importance: 'Very important',
      phase: 'Done',
      date: '23/02/2023',
      price: '12'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'Smith',
      importance: 'Standard',
      phase: 'In progress',
      date: '23/02/2023',
      price: '99'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'John',
      importance: 'Very important',
      phase: 'Done',
      date: '23/02/2023',
      price: '12'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'Smith',
      importance: 'Standard',
      phase: 'In progress',
      date: '23/02/2023',
      price: '99'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'John',
      importance: 'Very important',
      phase: 'Done',
      date: '23/02/2023',
      price: '12'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'Smith',
      importance: 'Standard',
      phase: 'In progress',
      date: '23/02/2023',
      price: '99'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'John',
      importance: 'Very important',
      phase: 'Done',
      date: '23/02/2023',
      price: '12'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'Smith',
      importance: 'Standard',
      phase: 'In progress',
      date: '23/02/2023',
      price: '99'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'John',
      importance: 'Very important',
      phase: 'Done',
      date: '23/02/2023',
      price: '12'
    },
    {
      task_name: 'Choose theme color',
      description: 'test',
      user: 'Smith',
      importance: 'Standard',
      phase: 'In progress',
      date: '23/02/2023',
      price: '99'
    }
  ];

  return (
    <Box
      sx={{
        height: 'calc(100vh - 444px)',
        overflow: 'auto'
      }}
    >
      <MaterialReactTable 
        columns={columns} 
        data={data}
        enableRowSelection={true}
        enableTopToolbar={false}
        enablePagination={true}
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10, 25, 50, 100],
          showFirstButton: true,
          showLastButton: true,
        }}
        initialState={{ pagination: { pageSize: 5, pageIndex: 0 } }}
      />
    </Box>
  );
}
