import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import Logo from '../../../components/logo';
import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 80;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: 'none'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 3),
  },
}));

type HeaderProps = {
  onOpenNav: (value:any)=>void,
};

export default function Header({ onOpenNav }:HeaderProps) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
          }}
        >
          <Box
            component="span"
            className="svg-color"
            sx={{
              width: 24,
              height: 24,
              display: 'inline-block',
              bgcolor: '#54A6FB',
              mask: `url(/assets/icons/navbar/menu.svg) no-repeat center / contain`,
              WebkitMask: `url(/assets/icons/navbar/menu.svg) no-repeat center / contain`,
            }}
          />
        </IconButton>

        <Box sx={{ px: 2.5, py: 3, display: 'inline-flex', marginLeft: 2 }}>
          <Logo />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover /> */}
          <Box
            component="span"
            className="svg-color"
            sx={{
              width: 24,
              height: 24,
              display: 'inline-block',
              backgroundImage: `url(/assets/icons/header/light.svg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              cursor: 'pointer'
            }}
          />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
