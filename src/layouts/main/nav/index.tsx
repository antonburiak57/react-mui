import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
import navConfig from './config';
import useResponsive from '../../../hooks/useResponsive';
import Logo from '../../../components/logo';
import { useTheme } from '@mui/material/styles';

const NAV_WIDTH = 84;
const APP_BAR_DESKTOP = 80;

type NavProps = {
  openNav: boolean,
  onCloseNav: ()=>void,
};

export default function Nav({ openNav, onCloseNav }:NavProps) {
  const { pathname } = useLocation();
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <NavSection data={navConfig} open={openNav} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        paddingTop: 3,
      }}
    >
      {!openNav && isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              position: 'relative',
              border: 'none',
              height: `calc(100vh - ${APP_BAR_DESKTOP + 25}px)`,
              backgroundColor: theme.palette.palette_style.background.default,
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: '280px', paddingLeft: 2, backgroundColor: theme.palette.palette_style.background.default },
          }}
        >
          <Box sx={{ px: 2.5, py: 3, display: 'inline-flex', marginLeft: 2 }}>
            <Logo />
          </Box>
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
