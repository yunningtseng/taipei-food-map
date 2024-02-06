import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

type MenuItemTextProps = {
  isSelected: boolean;
};

const StyledFilter = styled('div')(({ theme }) => ({
  maxWidth: '26rem',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  zIndex: 10,

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    position: 'fixed',
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  alignItems: 'center',

  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(1),
  },

  '& .MuiButtonBase-root': {
    width: 'auto',
    minWidth: 'auto',
    border: '1px solid #ffff',
  },

  [`& .${tabsClasses.scrollButtons}`]: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '50%',
    opacity: 1,

    '&:hover': {
      backgroundColor: '#d1c4e9',
      border: '1px solid #e0e0e0',
      borderRight: 'none',
    },

    '&.Mui-disabled': { opacity: 0 },
  },
}));

const StyledFilterButton = styled(Button)({
  display: 'flex',
  gap: '0.5rem',
  color: '#1d192b',
  backgroundColor: '#e8def8',
  borderRight: 'none',
  borderRadius: '0.5rem',

  '&:hover': {
    backgroundColor: '#d1c4e9',
    border: '1px solid #e0e0e0',
    borderRight: 'none',
  },
});

const StyledMenuItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0, 1, 0.5),
}));

const StyledMenuItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(0.5, 0.5, 0.5, 1),
}));

const StyledMenuItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<MenuItemTextProps>(({ theme, isSelected }) => ({
  '& .MuiTypography-root': {
    ...theme.typography.body2,
  },

  ...(isSelected && {
    '& .MuiTypography-root': {
      ...theme.typography.button,
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
}));

const StyledRightColumnContainer = styled('div')({
  width: '10rem',
  height: '32rem',
  overflow: 'hidden',
  overflowY: 'auto',
});

export {
  StyledFilter,
  StyledFilterButton,
  StyledMenuItem,
  StyledMenuItemButton,
  StyledMenuItemText,
  StyledRightColumnContainer,
  StyledTabs,
};
