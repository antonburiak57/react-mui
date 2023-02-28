import { Box } from '@mui/material';
import Header from '../sections/@list/Header';
import MenuBar from '../sections/@list/MenuBar';
import ToolBar from '../sections/@list/ToolBar';
import DataTable from '../sections/@list/DataTable';

export default function UserPage() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.05)',
        width: '100%',
        height: '100%'
      }}
    >
      <Header search="" />
      <MenuBar search="" />
      <ToolBar search="" />
      <DataTable search="" />
    </Box>
  );
}
