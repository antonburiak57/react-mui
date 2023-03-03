import {
  Button,
  Box
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Iconify from '../../components/iconify';

type HeaderProps = {
  search?: string
};

export default function Header({ search }:HeaderProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${theme.palette.palette_style.border.default}`,
        p: {xs: 1, lg: 2}
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          component="span"
          className="svg-color"
          sx={{
            width: 23,
            height: 23,
            display: 'inline-block',
            bgcolor: '#FFD789',
            mask: `url(/assets/icons/star.svg) no-repeat center / contain`,
            WebkitMask: `url(/assets/icons/star.svg) no-repeat center / contain`,
          }}
        />
        <Box
          sx={{
            fontSize: {xs: '18px', lg: '22px'},
            fontWeight: '600',
            lineHeight: '1.2',
            marginLeft: 1,
            marginTop: 0.3
          }}
        >
          Flexlists SaaS
        </Box>
        <Box
          component="span"
          className="svg-color"
          sx={{
            width: {xs: 16, lg: 24},
            height: {xs: 16, lg: 24},
            display: 'inline-block',
            bgcolor: '#16385C',
            mask: `url(/assets/icons/dots.svg) no-repeat center / contain`,
            WebkitMask: `url(/assets/icons/dots.svg) no-repeat center / contain`,
            marginLeft: {xs: 0.5, lg: 1},
            marginTop: {xs: 0.5, lg: 0.3},
            cursor: 'pointer'
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{ marginLeft: 2 }}
        >
          <Button size="small" color="primary" variant="contained" startIcon={<Iconify icon={'eva:paper-plane-fill'} />}>
            Publish
          </Button>
        </Box>
        <Box
          sx={{ marginLeft: {xs: 0.5, lg: 2} }}
        >
          <Button size="small" color="primary" variant="text" startIcon={<Iconify icon={'eva:share-outline'} />}>
            Share
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
