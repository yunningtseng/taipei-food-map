import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '4rem',
  background: 'linear-gradient(160deg,  #1f92a4 20%, #88d7d8 100%)',

  [theme.breakpoints.down('sm')]: {
    minHeight: '3rem',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  margin: theme.spacing(0, 0, 0, 2),
  paddingTop: theme.spacing(8),

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    margin: 0,
  },

  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(6),
  },
}));

const StyledShopMap = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',

  [theme.breakpoints.down('lg')]: {
    position: 'fixed',
  },
}));

const StyledHiddenDiv = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('lg')]: {
    minHeight: '60%',
    height: '100%',
    display: 'block',
    pointerEvents: 'none',
  },
}));

const StyledShopListWrapper = styled('div')(({ theme }) => ({
  maxHeight: '100%',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('lg')]: {
    maxHeight: 'none',
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1, 2, 0, 2),
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

const StyledSkeletonContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minWidth: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  paddingRight: theme.spacing(1),

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'row',
    paddingRight: theme.spacing(0),
  },
}));

const StyledSkeleton = styled('div')(({ theme }) => ({
  height: '8rem',
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),

  [theme.breakpoints.down('lg')]: {
    width: '49%',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
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
  StyledSkeleton,
  StyledSkeletonContainer,
  StyledToolbar,
  StyledWrapper,
};
