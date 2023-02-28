import { useState } from 'react';
import {
  Box
} from '@mui/material';
import Iconify from '../../components/iconify';

type MenuBarProps = {
  search?: string
};

const menus = [
  {
    title: 'List',
    icon: 'eva:list-outline'
  },
  {
    title: 'Calendar',
    icon: 'eva:calendar-outline'
  },
  {
    title: 'Gallery',
    icon: 'eva:file-add-outline'
  },
  {
    title: 'Kanban',
    icon: 'eva:file-text-outline'
  }
];

export default function MenuBar({ search }:MenuBarProps) {
  const [selectedMenu, setSelectedMenu] = useState('List');

  const handleMenu = (value: string) => {
    setSelectedMenu(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        borderBottom: '1px solid rgba(0, 0, 0, 0.03)',
        p: 2
      }}
    >
      <Box sx={{
        backgroundColor: '#EEF7FF',
        borderRadius: 1,
        paddingLeft: 1,
        paddingRight: 1,
        paddingBottom: 0.5,
        cursor: 'pointer'
      }}>
        <Box
          component="span"
          className="svg-color"
          sx={{
            width: 42,
            height: 42,
            display: 'inline-block',
            bgcolor: '#54A6FB',
            mask: `url(/assets/icons/navbar/Favourites_plus.svg) no-repeat center / contain`,
            WebkitMask: `url(/assets/icons/navbar/Favourites_plus.svg) no-repeat center / contain`,
            marginLeft: 2,
            marginTop: -0.5
          }}
        />
        <Box
          sx={{
            marginTop: -1
          }}
        >
          Add View
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginLeft: 3,
          borderLeft: '1px solid rgba(0, 0, 0, 0.1)'
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

  return (
    <Box
      sx={{
        position: icon === 'Info' ? 'fixed' : 'relative',
        bottom: icon === 'Info' ? '60px' : 'relative',
        width: '80px',
        textAlign: 'center',
        cursor: 'pointer',
        paddingTop: 1
      }}
      onClick={() => { setMenu(title) }}
    >
      <Iconify
        icon={icon}
        sx={{
          color: selected ? '#54A6FB' : '#666666',
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
            color: selected ? '#54A6FB' : '#666666',
            borderBottom: selected ? '1px solid #54A6FB' : 'none'
          }}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
}
