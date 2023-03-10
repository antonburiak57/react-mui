import { useMemo, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import Pagination from '@mui/material/Pagination';

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

const initialTasks: Task[] = [
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
  }
];
const PAGE_SIZE = 15;

export default function DataTable({ search }:DataTableProps) {
  const theme = useTheme();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(() => initialTasks);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: PAGE_SIZE,
  });

  useEffect(() => {
    //do something when the pagination state changes
  }, [pagination.pageIndex, pagination.pageSize]);

  const columns = useMemo<MRT_ColumnDef<Task>[]>(
    () => [
      {
        accessorKey: 'task_name',
        header: 'Task Name',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Box
              component="span"
              className="svg-color"
              sx={{
                width: 16,
                height: 16,
                display: 'inline-block',
                bgcolor: theme.palette.palette_style.text.primary,
                mask: `url(/assets/icons/table/task.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/icons/table/task.svg) no-repeat center / contain`,
                marginTop: 0.5,
                marginRight: 1
              }}
            />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'description',
        header: 'Description',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Box
              component="span"
              className="svg-color"
              sx={{
                width: 16,
                height: 16,
                display: 'inline-block',
                bgcolor: theme.palette.palette_style.text.primary,
                mask: `url(/assets/icons/table/task.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/icons/table/task.svg) no-repeat center / contain`,
                marginTop: 0.5,
                marginRight: 1
              }}
            />
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
            <Box
              component="span"
              className="svg-color"
              sx={{
                width: 16,
                height: 16,
                display: 'inline-block',
                bgcolor: theme.palette.palette_style.text.primary,
                mask: `url(/assets/icons/table/user.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/icons/table/user.svg) no-repeat center / contain`,
                marginTop: 0.5,
                marginRight: 1
              }}
            />
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
              borderRadius: '20px',
              color: '#666'
            }}
          >
            {renderedCellValue}
          </Box>
        ),
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Box
              component="span"
              className="svg-color"
              sx={{
                width: 16,
                height: 16,
                display: 'inline-block',
                bgcolor: theme.palette.palette_style.text.primary,
                mask: `url(/assets/icons/table/importance.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/icons/table/importance.svg) no-repeat center / contain`,
                marginTop: 0.5,
                marginRight: 1
              }}
            />
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
              borderRadius: '20px',
              color: '#666'
            }}
          >
            {renderedCellValue}
          </Box>
        ),
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Box
              component="span"
              className="svg-color"
              sx={{
                width: 16,
                height: 16,
                display: 'inline-block',
                bgcolor: theme.palette.palette_style.text.primary,
                mask: `url(/assets/icons/table/phase.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/icons/table/phase.svg) no-repeat center / contain`,
                marginTop: 0.5,
                marginRight: 1
              }}
            />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'date',
        header: 'Date',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Box
              component="span"
              className="svg-color"
              sx={{
                width: 16,
                height: 16,
                display: 'inline-block',
                bgcolor: theme.palette.palette_style.text.primary,
                mask: `url(/assets/icons/table/date.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/icons/table/date.svg) no-repeat center / contain`,
                marginTop: 0.5,
                marginRight: 1
              }}
            />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      },
      {
        accessorKey: 'price',
        header: 'Price',
        Header: ({ column }) => (
          <Box sx={{ display: 'flex' }}>
            <Box
              component="span"
              className="svg-color"
              sx={{
                width: 16,
                height: 16,
                display: 'inline-block',
                bgcolor: theme.palette.palette_style.text.primary,
                mask: `url(/assets/icons/table/price.svg) no-repeat center / contain`,
                WebkitMask: `url(/assets/icons/table/price.svg) no-repeat center / contain`,
                marginTop: 0.5,
                marginRight: 1
              }}
            />
            <div>{column.columnDef.header}</div>
          </Box>
        ),
      }
    ],
    [],
  );

  const handleCreateNewRow = (values: Task) => {
    tasks.push(values);
    setTasks([...tasks]);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value)
    setPagination({
      ...pagination,
      pageIndex: (value - 1)
    });
  };

  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '6px',
          right: '15px',
          zIndex: '3'
        }}
      >
        <AddTaskButton modalHandle={setCreateModalOpen} />
      </Box>
      <MaterialReactTable 
        columns={columns}
        data={tasks}
        enableStickyHeader={true}
        muiTableContainerProps={{ sx: { maxHeight: {xs: 'calc(100vh - 415px)', lg: 'calc(100vh - 395px)'} } }}
        enableRowSelection={true}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enablePagination={true}
        editingMode="modal"
        // muiTablePaginationProps={{
        //   rowsPerPageOptions: [5, 10, 25, 50, 100],
        //   showFirstButton: false,
        //   showLastButton: false,
        // }}
        onPaginationChange={setPagination}
        state={{ pagination }}
        // initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
        // renderBottomToolbarCustomActions={() => (
        //   <AddTaskButton modalHandle={setCreateModalOpen} />
        // )}
        muiTableHeadCellProps={{
          sx: (theme) => ({
            color: theme.palette.palette_style.text.primary,
            backgroundColor: theme.palette.palette_style.background.table_header_footer
          }),
        }}
        muiTableFooterCellProps={{
          sx: (theme) => ({
            color: theme.palette.palette_style.text.primary,
            backgroundColor: theme.palette.palette_style.background.table_header_footer,
            p: 0
          }),
        }}
        muiTableBodyCellProps={{
          sx: (theme) => ({
            color: theme.palette.palette_style.text.primary,
            backgroundColor: theme.palette.palette_style.background.table_body,
            py: 0.5
          }),
        }}
        muiBottomToolbarProps={{
          sx: () => ({
            height: '55px',
            backgroundColor: theme.palette.palette_style.background.table_header_footer
          }),
        }}
      />
      <Stack
        sx={{
          // position: 'fixed',
          // bottom: '87px',
          // width: 'calc(100% - 108px)',
          position: 'absolute',
          bottom: {xs: '-45px', lg: '-60px'},
          width: '100%',
          zIndex: 1,          
          p: {xs: 0.5, lg: 1.5},
          backgroundColor: theme.palette.palette_style.background.table_header_footer,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'inherit'
        }}
      >
        <AddTaskButton modalHandle={setCreateModalOpen} />
        <Pagination count={Math.ceil(tasks.length / PAGE_SIZE)} page={(pagination.pageIndex + 1)} onChange={handleChange} />
      </Stack>
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </Box>
  );
};

interface AddTaskButtonProps {
  modalHandle: (value: boolean) => void;
}

export const AddTaskButton = ({
  modalHandle
}: AddTaskButtonProps) => {
  const theme = useTheme();
  
  return (
    <Box
      component="span"
      className="svg-color"
      sx={{
        width: 36,
        height: 36,
        display: 'inline-block',
        bgcolor: theme.palette.palette_style.text.primary,
        mask: `url(/assets/icons/navbar/Favourites_plus.svg) no-repeat center / contain`,
        WebkitMask: `url(/assets/icons/navbar/Favourites_plus.svg) no-repeat center / contain`,
        cursor: 'pointer'
      }}
      onClick={() => modalHandle(true)}
    />
  );
};

interface CreateModalProps {
  columns: MRT_ColumnDef<Task>[];
  onClose: () => void;
  onSubmit: (values: Task) => void;
  open: boolean;
}

export const CreateNewAccountModal = ({
  open,
  columns,
  onClose,
  onSubmit,
}: CreateModalProps) => {
  const [values, setValues] = useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {} as any),
  );

  const handleSubmit = () => {
    //put validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Task</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
                required
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};
