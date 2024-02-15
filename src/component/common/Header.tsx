import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { StyledToolbar } from '../home/styles/LandingPage.styles';

const Header = () => {
  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant='h6' component='div'>
          Food Map
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
