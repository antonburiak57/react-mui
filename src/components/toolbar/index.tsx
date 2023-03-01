import {
    Box
} from '@mui/material';

type ToolBarItemProps = {
    toolbar: any
};
  
export default function ToolBarItem({ toolbar }:ToolBarItemProps) {
    const { title, icon, active, leftIcon, color } = toolbar;
  
    return (
      <Box
        sx={{
          display: 'flex',
          cursor: active? 'pointer' : 'no-drop',
          marginRight: 4,
          opacity: active ? 1 : 0.2,
          marginLeft: !leftIcon ? -2 : 0
        }}
      >
        {leftIcon && <Box
          component="span"
          className="svg-color"
          sx={{
            width: 18,
            height: 18,
            display: 'inline-block',
            bgcolor: color ? color : '#666666',
            mask: `url(/assets/icons/${icon}.svg) no-repeat center / contain`,
            WebkitMask: `url(/assets/icons/${icon}.svg) no-repeat center / contain`,
            marginRight: 1,
            marginTop: 0.2
          }}
        />}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              fontSize: '16px',
              color: color ? color : '#666666'
            }}
          >
            {title}
          </Box>
        </Box>
        {!leftIcon && <Box
          component="span"
          className="svg-color"
          sx={{
            width: 18,
            height: 18,
            display: 'inline-block',
            bgcolor: color ? color : '#666666',
            mask: `url(/assets/icons/toolbar/${icon}.svg) no-repeat center / contain`,
            WebkitMask: `url(/assets/icons/${icon}.svg) no-repeat center / contain`,
            marginLeft: 1,
            marginTop: 0.2
          }}
        />}
      </Box>
    );
}