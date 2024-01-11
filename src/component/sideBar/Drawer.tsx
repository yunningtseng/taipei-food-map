import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import styled from 'styled-components';
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
  console.log(open);

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
                  <ChevronLeftIcon />
                </StyledButton>
              </Box>
            </Box>
          </StyledDrawer>
        </Box>
      ) : (
        <Box display={open ? 'none' : 'flex'} alignItems='center' m={2}>
          <StyledButton onClick={handleDrawerOpen}>
            <ChevronRightIcon />
          </StyledButton>
        </Box>
      )}
    </>
  );
};

export default Menu;
