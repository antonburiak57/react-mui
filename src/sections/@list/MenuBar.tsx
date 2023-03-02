import { useState } from 'react';
import {
  Box
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

type MenuBarProps = {
  search?: string
};

const menus = [
  {
    title: 'List',
    icon: 'menu/checklist'
  },
  {
    title: 'Calendar',
    icon: 'menu/calendar'
  },
  {
    title: 'Gallery',
    icon: 'menu/add'
  }
];

export default function MenuBar({ search }:MenuBarProps) {
  const [selectedMenu, setSelectedMenu] = useState('List');
  const theme = useTheme();

  const handleMenu = (value: string) => {
    setSelectedMenu(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        borderBottom: `1px solid ${theme.palette.palette_style.border.default}`,
        p: 1
      }}
    >
      <Box sx={{
        backgroundColor: theme.palette.palette_style.background.selected,
        borderRadius: 1,
        px: 1,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box
          component="span"
          className="svg-color"
          sx={{
            width: 24,
            height: 24,
            display: 'inline-block',
            bgcolor: theme.palette.palette_style.text.selected,
            mask: `url(/assets/icons/menu/plus.svg) no-repeat center / contain`,
            WebkitMask: `url(/assets/icons/menu/plus.svg) no-repeat center / contain`,
            marginRight: 1
          }}
        />
        <Box
          sx={{
            color: '#666'
          }}
        >
          Add View
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginLeft: 3,
          borderLeft: `1px solid ${theme.palette.palette_style.border.default}`,
          paddingLeft: 1
        }}
      >
        {menus.map((menu) => (
          <MenuItem key={menu.title} menu={menu} setMenu={handleMenu} selected={selectedMenu === menu.title} />
        ))}
      </Box>
    </Box>
  );
}

type MenuItemProps = {
  menu: any,
  selected: boolean,
  setMenu: (value: string) => void;
};

function MenuItem({ menu, selected, setMenu }:MenuItemProps) {
  const { title, icon } = menu;
  const theme = useTheme();

  return (
    <Box
      sx={{
        cursor: 'pointer',
        display: 'flex',
        py: 0.5,
        px: 2
      }}
      onClick={() => { setMenu(title) }}
    >
      <Box
        component="span"
        className="svg-color"
        sx={{
          width: 18,
          height: 18,
          display: 'inline-block',
          bgcolor: selected ? theme.palette.palette_style.text.selected : theme.palette.palette_style.text.primary,
          mask: `url(/assets/icons/${icon}.svg) no-repeat center / contain`,
          WebkitMask: `url(/assets/icons/${icon}.svg) no-repeat center / contain`,
          marginRight: 1,
          marginTop: 0.2
        }}
      />
      <Box
        sx={{
          fontSize: '16px',
          color: selected ? theme.palette.palette_style.text.selected : theme.palette.palette_style.text.primary
        }}
      >
        {title}
      </Box>
    </Box>
  );
}
