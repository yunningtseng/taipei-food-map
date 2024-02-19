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
  marginTop: theme.spacing(1),

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
    border: '2px solid #fff',

    '&:hover': {
      border: '2px solid #fff',
    },
  },

  [`& .${tabsClasses.scrollButtons}`]: {
    color: 'black',
    borderRadius: '50%',
    opacity: 1,
    backgroundColor: '#f9cdbb',

    '&.Mui-disabled': {
      display: 'none',
    },
  },
}));

const StyledTabButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  color: '#000',
  backgroundColor: '#f9cdbb',
  borderRadius: '0.5rem',

  '&:hover': {
    backgroundColor: '#f3b296',
  },
}));

const StyledMenuList = styled(MenuList)({
  padding: 0,
});

const StyledMenuSelect = styled(MenuItem)(({ theme }) => ({
  minHeight: 'auto',
  backgroundColor: '#f8fafc',
  ...theme.typography.body2,

  '&:hover': {
    backgroundColor: '#f4e4d7',
  },
  '&.Mui-selected': {
    backgroundColor: '#f4e4d7',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#f4e4d7',
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

const StyledTwoColumnItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#f8fafc',
  padding: theme.spacing(0),
}));

const StyledTwoColumnItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1),

  '&:hover': {
    backgroundColor: '#f4e4d7',
  },
  '&.Mui-selected': {
    backgroundColor: '#f4e4d7',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#f4e4d7',
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
  StyledMenuItemText,
  StyledMenuList,
  StyledMenuSelect,
  StyledRightColumnContainer,
  StyledTabButton,
  StyledTabs,
  StyledTwoColumnItem,
  StyledTwoColumnItemButton,
};
