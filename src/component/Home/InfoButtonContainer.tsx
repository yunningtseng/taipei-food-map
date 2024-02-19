import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react';
import {
  StyledIconButton,
  StyledInfoIconContainer,
} from './styles/LandingPage.styles';

const InfoButtonContainer = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledInfoIconContainer>
      <StyledIconButton ref={anchorRef} onClick={handleClick}>
        <InfoIcon fontSize='small' />
      </StyledIconButton>
      <Popover
        open={open}
        disableScrollLock
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box width={200} p={1}>
          <Typography variant='caption'>
            此搜尋結果由Google提供。依關聯性、距離、名氣等因素，找出距離捷運站一公里左右最符合的商家。
          </Typography>
        </Box>
      </Popover>
    </StyledInfoIconContainer>
  );
};

export default InfoButtonContainer;
