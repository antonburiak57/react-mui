import {
  Box
} from '@mui/material';
import ToolBarItem from '../../components/toolbar';

type ToolbBarProps = {
  search?: string
};

const dos = [
  {
    title: 'Undo',
    icon: 'toolbar/undo',
    active: true,
    leftIcon: true
  },
  {
    title: 'Redo',
    icon: 'toolbar/redo',
    active: false,
    leftIcon: false
  }
];

const views = [
  {
    title: 'Filter',
    icon: 'toolbar/filter',
    active: true,
    leftIcon: true
  },
  {
    title: 'Sort',
    icon: 'toolbar/sort',
    active: true,
    leftIcon: true
  }
];

const actions = [  
  {
    title: 'Save',
    icon: 'toolbar/save',
    active: true,
    leftIcon: true
  },
  {
    title: 'Import',
    icon: 'toolbar/import',
    active: true,
    leftIcon: true
  },
  {
    title: 'Export',
    icon: 'toolbar/export',
    active: true,
    leftIcon: true
  },
  {
    title: 'Print',
    icon: 'toolbar/print',
    active: true,
    leftIcon: true
  },
  {
    title: 'Download',
    icon: 'toolbar/download',
    active: true,
    leftIcon: true
  }
];

export default function ToolbBar({ search }:ToolbBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        py: 1,
        borderBottom: '1px solid rgba(0, 0, 0, 0.03)'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          py: 1,
          paddingLeft: 2,
          marginRight: 2,
          borderRight: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        {dos.map((toolbar) => (
          <ToolBarItem key={toolbar.title} toolbar={toolbar} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          py: 1,
          paddingLeft: 2,
          marginRight: 2,
          borderRight: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        {views.map((toolbar) => (
          <ToolBarItem key={toolbar.title} toolbar={toolbar} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          py: 1,
          paddingLeft: 2,
          flexWrap: 'wrap'
        }}
      >
        {actions.map((toolbar) => (
          <ToolBarItem key={toolbar.title} toolbar={toolbar} />
        ))}
      </Box>
    </Box>
  );
}
