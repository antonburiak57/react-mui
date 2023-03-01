import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import React from 'react';

const Logo = React.forwardRef<any, LogoProps>(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 50,
        height: 36,
        display: 'inline-flex',
        ...sx,
        backgroundImage: `url(/assets/logo.svg)`,
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
