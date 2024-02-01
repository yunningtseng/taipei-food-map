import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type Props = {
  isShopOpenList: boolean;
};

const StyledContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<Props>(({ theme, isShopOpenList }) => ({
  display: 'flex',
  // !
  height: 'calc(100vh - 10rem)',
  paddingTop: theme.spacing(12),
  marginLeft: theme.spacing(4),
  position: 'relative',

  [theme.breakpoints.down('lg')]: {
    display: isShopOpenList ? 'flex' : 'block',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const StyledFilter = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',

  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));

const StyledShopListWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<Props>(({ theme, isShopOpenList }) => ({
  display: 'flex',
  position: 'relative',
  height: 'calc(100vh - 10rem)',

  [theme.breakpoints.down('lg')]: {
    display: isShopOpenList ? 'block' : 'none',
  },
}));

const StyledShopMap = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<Props>(({ theme, isShopOpenList }) => ({
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('lg')]: {
    display: isShopOpenList ? 'none' : 'block',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'none',
  minWidth: '6rem',
  minHeight: '2.5rem',

  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

export {
  StyledContainer,
  StyledFilter,
  StyledShopListWrapper,
  StyledShopMap,
  StyledButton,
};
