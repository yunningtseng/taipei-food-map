import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          height: '4rem',
          background: 'linear-gradient(160deg,  #d65364 20%, #ffa684 100%)',
        }}
      >
        <Typography variant='h6' component='div'>
          Food Map
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
