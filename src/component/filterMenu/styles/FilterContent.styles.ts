import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

const StyledFilter = styled('div')(({ theme }) => ({
  width: '26rem',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),

  [theme.breakpoints.down('lg')]: {
    width: '100%',
    padding: theme.spacing(0, 2),
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
    border: '2px solid #ffff',

    '&:hover': {
      border: '2px solid #ffff',
    },
  },

  [`& .${tabsClasses.scrollButtons}`]: {
    color: 'black',
    borderRadius: '50%',
    opacity: 1,
    backgroundColor: '#e8def8',

    '&.Mui-disabled': {
      display: 'none',
    },
  },
}));

const StyledTabsMenuList = styled(MenuList)({
  padding: 0,
});

const StyledTabsMenuSelect = styled(MenuItem)(({ theme }) => ({
  minHeight: 'auto',
  backgroundColor: '#eceff1',
  ...theme.typography.body2,

  '&:hover': {
    backgroundColor: '#cfd8dc',
  },
  '&.Mui-selected': {
    backgroundColor: '#b0bec5',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#b0bec5',
  },
}));

const StyledTabButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  color: '#1d192b',
  backgroundColor: '#e8def8',
  border: 'none',
  borderRadius: '0.5rem',

  '&:hover': {
    backgroundColor: '#d1c4e9',
    border: 'none',
  },
}));

const StyledRightColumnContainer = styled('div')(({ theme }) => ({
  width: '9rem',
  height: '26rem',
  overflow: 'hidden',
  overflowY: 'auto',

  [theme.breakpoints.down('sm')]: {
    height: '20rem',
  },
}));

const StyledMenuItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#eceff1',
  padding: theme.spacing(0),
}));

const StyledMenuItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1),

  '&:hover': {
    backgroundColor: '#cfd8dc',
  },
  '&.Mui-selected': {
    backgroundColor: '#b0bec5',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#b0bec5',
  },
}));

const StyledMenuItemText = styled(ListItemText)(({ theme }) => ({
  margin: theme.spacing(0),
  '& .MuiTypography-root': {
    ...theme.typography.body2,
  },
}));

export {
  StyledFilter,
  StyledMenuItem,
  StyledMenuItemButton,
  StyledMenuItemText,
  StyledRightColumnContainer,
  StyledTabButton,
  StyledTabs,
  StyledTabsMenuList,
  StyledTabsMenuSelect
};
