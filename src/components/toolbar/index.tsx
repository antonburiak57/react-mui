import {
    Box
} from '@mui/material';

type ToolBarItemProps = {
    toolbar: any
};
  
export default function ToolBarItem({ toolbar }:ToolBarItemProps) {
    const { title, icon } = toolbar;
  
    return (
      <Box
        sx={{
          display: 'flex',
          cursor: 'pointer',
          marginRight: 4
        }}
      >
        <Box
          component="span"
          className="svg-color"
          sx={{
            width: 18,
            height: 18,
            display: 'inline-block',
            bgcolor: '#666666',
            mask: `url(/assets/icons/toolbar/${icon}.svg) no-repeat center / contain`,
            WebkitMask: `url(/assets/icons/${icon}.svg) no-repeat center / contain`,
            marginRight: 1,
            marginTop: 0.2
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              fontSize: '16px',
            }}
          >
            {title}
          </Box>
        </Box>
      </Box>
    );
}