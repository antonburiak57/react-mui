// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';
import React from 'react';

// ----------------------------------------------------------------------

const Iconify =  React.forwardRef<any, IconifyPropTypes>(({icon,color, width = 20,height=20, sx, ...other }, ref)=> (
  <Box ref={ref} component={Icon} icon={icon} color= {color} sx={{ width, height: height, ...sx }} {...other} />
));

type IconifyPropTypes = {
  color?:string,
  sx?: any,
  width?: number|string,
  height?: number|string,
  icon?: any,
};

export default Iconify;
