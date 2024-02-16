import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react';
import {
  StyledIconButton,
  StyledInfoIconContainer,
} from './styles/LandingPage.styles';
import useQueryShopStore from '../../store/useQueryShopStore';

const InfoButtonContainer = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const station = useQueryShopStore.use.station();

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
            關於這些結果：搜尋結果為距離{station}捷運站大約半徑一公里左右的商家。Google
            地圖顯示的結果會結合多項因素
            (主要包括關聯性、距離和名氣)，找出最符合的搜尋結果。
          </Typography>
        </Box>
      </Popover>
    </StyledInfoIconContainer>
  );
};

export default InfoButtonContainer;
