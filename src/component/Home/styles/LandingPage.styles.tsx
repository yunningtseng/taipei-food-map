import IconButton from '@mui/material/IconButton';
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
    pointerEvents: 'none',
  },
}));

const StyledShopListWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('lg')]: {
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1, 2, 0, 2),
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: '1rem',
  },
}));

const StyledInfoContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
  paddingRight: theme.spacing(1),

  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

const StyledInfoIconContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    position: 'absolute',
    right: 0,
  },
}));

const StyledIconButton = styled(IconButton)({
  padding: 0,
});

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
  StyledDivider,
  StyledHiddenDiv,
  StyledIconButton,
  StyledInfoContainer,
  StyledInfoIconContainer,
  StyledShopListWrapper,
  StyledShopMap,
  StyledWrapper,
};
