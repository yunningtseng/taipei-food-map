import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import FilterSection from './FilterSection';

const StyledDrawer = styled(Drawer)({
  height: '100%',
  flexShrink: 0,

  '& .MuiDrawer-paper': {
    position: 'relative',
  },
});

const StyledButton = styled(Button)({
  height: '2rem',
});

const Menu = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <Box display={open ? 'flex' : 'none'}>
          <StyledDrawer variant='persistent' anchor='left' open={open}>
            <Box display='flex' m={2} gap={2} height='100%'>
              <Box>
                <FilterSection />
              </Box>

              <Box display='flex' alignItems='center'>
                <StyledButton onClick={handleDrawerClose}>
                  <KeyboardArrowLeftIcon />
                </StyledButton>
              </Box>
            </Box>
          </StyledDrawer>
        </Box>
      ) : (
        <Box display={open ? 'none' : 'flex'} alignItems='center' m={2}>
          <StyledButton onClick={handleDrawerOpen}>
            <KeyboardArrowRightIcon />
          </StyledButton>
        </Box>
      )}
    </>
  );
};

export default Menu;
