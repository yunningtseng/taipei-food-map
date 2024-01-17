import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { HierarchicalListItemProps } from '../../../types/hierarchy';

type ListItemTextProps = {
  isSelected: boolean;
};

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0, 1, 0.5),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(0.5, 0.5, 0.5, 1),
}));

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: '2rem',
  height: '2rem',
});

const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<ListItemTextProps>(({ theme, isSelected }) => ({
  ...(isSelected && {
    '& .MuiTypography-root': {
      ...theme.typography.button,
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
}));

const StyledHierarchyListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'isTop' && prop !== 'isSelected',
})<HierarchicalListItemProps>(({ theme, isTop, isSelected }) => ({
  cursor: 'pointer',
  padding: isTop
    ? theme.spacing(0.5, 1, 0.5, 2)
    : theme.spacing(0.5, 1, 0.5, 4),

  '& .MuiTypography-root': {
    ...theme.typography.body2,
    ...(isSelected && {
      ...theme.typography.button,
      fontWeight: theme.typography.fontWeightBold,
    }),
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledListItemCount = styled(ListItemText)({
  textAlign: 'end',
});

export {
  StyledHierarchyListItem,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  StyledListItemCount,
};
