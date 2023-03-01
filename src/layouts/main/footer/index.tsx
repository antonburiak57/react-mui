import {
    Box
  } from '@mui/material';
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
    return (
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          width: '100%',
          bottom: '15px',
          left: '120px',
          p: 2
        }}
      >
        {toolbars.map((toolbar) => (
          <ToolBarItem key={toolbar.title} toolbar={toolbar} />
        ))}
      </Box>
    );
  }
  