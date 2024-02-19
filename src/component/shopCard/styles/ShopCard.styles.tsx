import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const StyledCardWrapper = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'block',
    position: 'fixed',
    bottom: 0,
    padding: theme.spacing(0, 1, 1, 1),
  },
}));

const StyledCardCloseButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: '-0.6rem',
    right: '0.1rem',
    padding: 0,
    backgroundColor: '#f7f7f7',
    color: '#aaaaaa',
  },
}));

export { StyledCardCloseButton, StyledCardWrapper };
