import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeader = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  textAlign: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.grey[400],
  zIndex: 10,
}));

const Header = () => {
  return (
    <StyledHeader>
      <Typography variant='h6'>Food Map</Typography>
    </StyledHeader>
  );
};

export default Header;
