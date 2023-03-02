import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const Logo = React.forwardRef<any, LogoProps>(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();
  
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 50,
        height: 36,
        display: 'inline-flex',
        ...sx,
        backgroundImage: theme.palette.mode === 'dark' ? 'url(/assets/logo_dark.svg)' : 'url(/assets/logo.svg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      {...other}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

type LogoProps = {
  sx?: object,
  disabledLink?: boolean,
};

export default Logo;
