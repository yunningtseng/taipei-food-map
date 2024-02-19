import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';
import StraightenIcon from '@mui/icons-material/Straighten';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MouseEvent, useRef, useState } from 'react';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useCardOpenStore from '../../store/useListOpenStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { Place } from '../../types/place';
import ShopCardMenu from '../shopCard/ShopCardMenu';
import {
  StyledDescription,
  StyledDescriptionContainer,
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
  StyledShopContent,
  StyledShopContentContainer,
  StyledShopItem,
  StyledShopName,
  StyledTooltip,
} from './styles/ShopItem.styles';

type Props = {
  item: Place;
  type: string;
};

const ShopContent = ({ item, type }: Props) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const station = useQueryShopStore.use.station();
  const isCardOpen = useCardOpenStore.use.isCardOpen();
  const selectedShop = useShopInfoStore.use.selectedShop();

  const moreIconButtonRef = useRef<HTMLButtonElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setMenuOpen(true);
  };

  const handleCloseMenu = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setMenuOpen(false);
  };

  const cardCanOpen = isCardOpen && smDown && selectedShop;

  return (
    <StyledShopItem>
      <Box>
        <StyledShopName
          type={type}
          action={
            <>
              {!cardCanOpen && (
                <IconButton
                  disableFocusRipple
                  ref={moreIconButtonRef}
                  onClick={handleOpenMenu}
                >
                  <MoreVertIcon fontSize='small' />
                </IconButton>
              )}
            </>
          }
          title={item.name}
        />

        <StyledMenu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={moreIconButtonRef.current}
          open={menuOpen}
          disableScrollLock
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <StyledMenuItem>
            <StyledMenuLink
              target='_blank'
              href={item.googleMapsUri}
              underline='none'
            >
              <Typography variant='body2' onClick={handleCloseMenu}>
                前往 Google Map
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </StyledMenuLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuLink
              target='_blank'
              href={`https://www.google.com/maps/dir/?api=1&origin=${station}捷運站&destination=${item.name}&destination_place_id=${item.id}&travelmode=walking&hl=zh-TW
              `}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1} onClick={handleCloseMenu}>
                規劃路線
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </StyledMenuLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuLink
              target='_blank'
              href={`https://search.google.com/local/reviews?placeid=${item.id}&hl=zh-TW&gl=TW`}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1} onClick={handleCloseMenu}>
                查看評論
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </StyledMenuLink>
          </StyledMenuItem>
        </StyledMenu>

        <StyledShopContentContainer type={type}>
          <StyledShopContent>{item.address}</StyledShopContent>

          {item.editorialSummary && (
            <StyledShopContent>{item.editorialSummary}</StyledShopContent>
          )}
        </StyledShopContentContainer>
      </Box>

      <StyledDescriptionContainer>
        <StyledTooltip title='評分(評論數)' placement='top' arrow>
          <StyledDescription>
            <StarIcon fontSize='small' />
            {`${item.rating} (${item.userRatingCount})`}
          </StyledDescription>
        </StyledTooltip>

        <StyledTooltip title='與捷運站的直線距離' placement='top' arrow>
          <StyledDescription>
            <StraightenIcon fontSize='small' />
            {`${item.distance}m`}
          </StyledDescription>
        </StyledTooltip>
      </StyledDescriptionContainer>

      {cardCanOpen && <ShopCardMenu item={item} />}
    </StyledShopItem>
  );
};

export default ShopContent;
