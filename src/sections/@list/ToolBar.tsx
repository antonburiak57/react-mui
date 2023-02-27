import {
  Box
} from '@mui/material';
import ToolBarItem from '../../components/toolbar';

type ToolbBarProps = {
  search?: string
};

const toolbars = [
  {
    title: 'Undo',
    icon: 'toolbar/undo'
  },
  {
    title: 'Redo',
    icon: 'toolbar/redo'
  },
  {
    title: 'Filter',
    icon: 'toolbar/filter'
  },
  {
    title: 'Sort',
    icon: 'toolbar/sort'
  },
  {
    title: 'Save',
    icon: 'toolbar/save'
  },
  {
    title: 'Import',
    icon: 'toolbar/import'
  },
  {
    title: 'Export',
    icon: 'toolbar/export'
  },
  {
    title: 'Print',
    icon: 'toolbar/print'
  },
  {
    title: 'Download',
    icon: 'toolbar/download'
  }
];

export default function ToolbBar({ search }:ToolbBarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        borderBottom: '1px solid rgba(0, 0, 0, 0.03)',
        p: 2
      }}
    >
      {toolbars.map((toolbar) => (
        <ToolBarItem key={toolbar.title} toolbar={toolbar} />
      ))}
    </Box>
  );
}
