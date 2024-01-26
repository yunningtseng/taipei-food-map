import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

type ListItemTextProps = {
  isSelected: boolean;
};

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0, 1, 0.5),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(0.5, 0.5, 0.5, 1),
}));

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

export { StyledListItem, StyledListItemButton, StyledListItemText };
