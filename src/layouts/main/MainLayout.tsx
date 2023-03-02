import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Header from './header';
import Nav from './nav';
import Footer from './footer';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 80;

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  backgroundColor: theme.palette.palette_style.background.default,
  color: theme.palette.palette_style.text.primary
}));

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP,
    paddingLeft: theme.spacing(1),
    paddingBottom: 0
  },
  display: 'flex'
}));

const Content = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.palette_style.background.gap,
  width: '100%',
  height: `calc(100vh - 170px)`,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1)
}));

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />

      <Main>
        <Nav openNav={open} onCloseNav={() => setOpen(false)} />
        <Content>
          <Outlet />
        </Content>
      </Main>

      <Footer />
    </StyledRoot>
  );
}
