import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const StyledSearchBar = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'center'
  },
}));

const top100Films = [
  { label: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.', sub1: 'Current list', sub2: 'Description', icon: 'table/task.svg' },
  { label: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.', sub1: 'Current list', sub2: 'Description', icon: 'table/task.svg' },
  { label: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.', sub1: 'All', sub2: 'Account settings', icon: 'table/task.svg' }
];

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: { xs: '100%', sm: '85%', md: 500, lg: 800 } }}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                py: 1
              }}
            >
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Box
                  component="span"
                  className="svg-color"
                  sx={{
                    width: 18,
                    height: 18,
                    display: 'inline-block',
                    bgcolor: '#D3D3D3',
                    mask: `url(/assets/icons/header/magnify.svg) no-repeat center / contain`,
                    WebkitMask: `url(/assets/icons/header/magnify.svg) no-repeat center / contain`,
                    mr: 1,
                    mt: 0.4
                  }}
                />
                <Box
                  sx={{
                    width: { xs: '330px', sm: 150, md: 200, lg: 400 },
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {option.label}
                </Box>
              </Box>
              <Box
                sx={{
                  display: {xs: 'none', md: 'flex'},
                  backgroundColor: '#EDF2F5',
                  borderRadius: '6px',
                  border: '1px solid rgba(102, 102, 102, 0.1)',
                  px: 1,
                  py: 0.5
                }}
              >
                <Box>{option.sub1} / </Box>
                <Box
                  component="span"
                  className="svg-color"
                  sx={{
                    width: 18,
                    height: 18,
                    display: 'inline-block',
                    bgcolor: '#D3D3D3',
                    mask: `url(/assets/icons/${option.icon}) no-repeat center / contain`,
                    WebkitMask: `url(/assets/icons/${option.icon}) no-repeat center / contain`,
                    mx: 0.5,
                    mt: 0.3
                  }}
                />
                <Box>{option.sub2}</Box>
              </Box>
            </Box>
          </li>
        )}
      />
    </StyledSearchBar>
  );
}
