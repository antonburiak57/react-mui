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
  const FOOTER_MOBILE = 64;
  const FOOTER_DESKTOP = 80;
  
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
          paddingLeft: {xs: '30px', lg: '140px'},
          height: {xs: FOOTER_MOBILE, lg: FOOTER_DESKTOP},
          paddingTop: {xs: '20px', lg: '28px'},
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
  