import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from '../sections/@list/Header';
import MenuBar from '../sections/@list/MenuBar';
import ToolBar from '../sections/@list/ToolBar';
import DataTable from '../sections/@list/DataTable';

export default function UserPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.palette_style.background.default,
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
