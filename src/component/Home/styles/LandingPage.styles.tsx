import { styled } from '@mui/material/styles';

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  margin: theme.spacing(0, 0, 0, 2),
  paddingTop: theme.spacing(8),

  [theme.breakpoints.down('lg')]: {
    height: 'auto',
    flexDirection: 'column',
    margin: 0,
  },
}));

const StyledShopMap = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',

  [theme.breakpoints.down('lg')]: {
    width: '100%',
    height: '60%',
    position: 'fixed',
  },

  [theme.breakpoints.down('sm')]: {
    height: '100%',
  },
}));

const StyledHiddenDiv = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('lg')]: {
    height: '60vh',
    display: 'block',
    position: 'relative',
    zIndex: 30,
    pointerEvents: 'none',
  },
}));

const StyledShopListWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1, 2, 0, 2),
    position: 'relative',
    zIndex: 20,
    backgroundColor: '#fff',
    borderRadius: '1rem',
  },
}));

const StyledDivider = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('lg')]: {
    width: '3rem',
    display: 'block',
    margin: theme.spacing(1.5),
    borderRadius: '1rem',
    border: '1.5px solid #ccc',
  },
}));

export {
  StyledWrapper,
  StyledShopMap,
  StyledShopListWrapper,
  StyledDivider,
  StyledHiddenDiv,
};
