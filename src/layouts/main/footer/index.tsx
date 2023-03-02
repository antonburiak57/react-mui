import {
    Box
  } from '@mui/material';
  import { useTheme } from '@mui/material/styles';
  import ToolBarItem from '../../../components/toolbar';
  
  const toolbars = [
    {
      title: 'Add comment',
      icon: 'footer/add_comment',
      active: true
    },
    {
      title: 'Archive',
      icon: 'footer/archive',
      active: true
    },
    {
      title: 'Delete list',
      icon: 'footer/delete_list',
      active: true,
      color: '#c92929'
    }
  ];
  
  export default function Footer() {
    const theme = useTheme();

    return (
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          width: '100%',
          bottom: 0,
          left: 0,
          paddingLeft: '140px',
          height: '80px',
          paddingTop: '24px',
          backgroundColor: theme.palette.palette_style.background.default,
          zIndex: 1000
        }}
      >
        {toolbars.map((toolbar) => (
          <ToolBarItem key={toolbar.title} toolbar={toolbar} />
        ))}
      </Box>
    );
  }
  