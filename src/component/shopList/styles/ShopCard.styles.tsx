import { styled } from '@mui/material/styles';

const StyledShopCardWrapper = styled('div')(({ theme }) => ({
  display: 'none',
  
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2, 2, 2),
    position: 'fixed',
    bottom: 0,
    zIndex: 20,
    backgroundColor: '#fff',
    borderRadius: '1rem',
    padding: theme.spacing(1, 1, 0, 1),
  },
}));

export { StyledShopCardWrapper };
