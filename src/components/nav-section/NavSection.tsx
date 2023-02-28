import { useEffect } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, List, ListItemText } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { StyledNavItem, StyledNavItemIcon } from './styles';

type NavSectionProps = {
  data: any[],
  open: boolean
};

export default function NavSection({ data = [], open = false, ...other }: NavSectionProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname, 'pathname')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} open={open} pathname={pathname} />
        ))}
      </List>
    </Box>
  );
}

type NavItemProps = {
  item: any,
  open: boolean,
  pathname: string
};

function NavItem({ item, open, pathname }:NavItemProps) {
  const { title, path, icon } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        position: icon === 'Info' ? 'fixed' : 'relative',
        bottom: icon === 'Info' ? '40px' : 'relative',
        width: !open ? 56 : 'inherit'
      }}
    >
      {pathname === '/dashboard/app' ? 
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> :
      <Box
        component="span"
        className="svg-color"
        sx={{
          width: 54,
          height: 50,
          display: 'inline-block',
          backgroundImage: `url(/assets/icons/navbar/${pathname === path ? icon + 'Active' : icon}.svg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px'
        }}
      />
      }

      {open && <ListItemText disableTypography primary={title} sx={{ marginLeft: 2 }} />}
    </StyledNavItem>
  );
}
