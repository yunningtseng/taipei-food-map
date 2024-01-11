import styled from 'styled-components';
import { Typography } from '@mui/material';

const StyledHeader = styled.div({
  width: '100%',
  position: 'fixed',
  textAlign: 'center',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  color: '#bbab8c',
  backgroundColor: '#faeed1',
  zIndex: 10,
});

const Header = () => {
  return (
    <StyledHeader>
      <Typography variant='h6'>Food Map</Typography>
    </StyledHeader>
  );
};

export default Header;
