import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Slide, IconButton, ClickAwayListener } from '@mui/material';
import { bgBlur } from '../../utils/cssStyles';
import Iconify from '../iconify';
import customShadows from '../../theme/customShadows';
import SearchBarMin from './SearchBarMin';

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled('div')(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: '75px',
  left: '15px',
  zIndex: 99,
  width: 'calc(100vw - 30px)',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE,
  padding: 0.5,
  boxShadow: customShadows().z8,
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
    top: '104px',
  },
}));

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <SearchBarMin />
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
