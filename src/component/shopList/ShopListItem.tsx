import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';
import StraightenIcon from '@mui/icons-material/Straighten';
import { useMediaQuery, useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { MouseEvent, useRef, useState } from 'react';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useCardOpenStore from '../../store/useListOpenStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { Place } from '../../types/place';
import ShopPhoto from '../../utils/ShopPhoto';
import {
  StyledCardChipsContainer
} from './styles/ShopCard.styles';
import {
  StyledDescription,
  StyledDescriptionContainer,
  StyledMenuItem,
  StyledMenuLink,
  StyledShopContent,
  StyledShopContentContainer,
  StyledShopItem,
  StyledShopItemContainer,
  StyledShopName,
  StyledTooltip,
} from './styles/ShopList.styles';

type Props = {
  item: Place;
};

const ShopListItem = ({ item }: Props) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();

  const station = useQueryShopStore.use.station();

  const setCardOpen = useCardOpenStore.use.setCardOpen();
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  const cardCanOpen = isCardOpen && smDown && selectedShop;

  const handleShopSelection = () => {
    setCardOpen(true);
    scrollToTop();

    setSelectedShop({
      id: item.id,
      name: item.name,
      address: item.address,
      distance: item.distance,
      longitude: item.longitude,
      latitude: item.latitude,
      googleMapsUri: item.googleMapsUri,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      editorialSummary: item.editorialSummary,
      photoNames: item.photoNames,
    });
  };

  const handleShopMouseEnter = () => {
    setHoveredShop({
      id: item.id,
      name: item.name,
      address: item.address,
      distance: item.distance,
      longitude: item.longitude,
      latitude: item.latitude,
      googleMapsUri: item.googleMapsUri,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      editorialSummary: item.editorialSummary,
      photoNames: item.photoNames,
    });
  };

  const handleShopMouseLeave = () => {
    setHoveredShop(null);
  };

  return (
    <StyledShopItemContainer
      isCardOpen={cardCanOpen as boolean}
      onClick={handleShopSelection}
      onMouseEnter={handleShopMouseEnter}
      onMouseLeave={handleShopMouseLeave}
    >
      <ShopPhoto
        id={item.id}
        photoNames={item.photoNames}
        isSmallSize={false}
      />
      <StyledShopItem>
        <StyledShopName
          action={
            <>
              {!cardCanOpen && (
                <IconButton ref={moreIconButtonRef} onClick={handleOpenMenu}>
                  <MoreVertIcon fontSize='small' />
                </IconButton>
              )}
            </>
          }
          title={item.name}
        />

        <Menu
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
        </Menu>

        <StyledShopContentContainer>
          <StyledShopContent>{item.address}</StyledShopContent>

          {item.editorialSummary && (
            <StyledShopContent>{item.editorialSummary}</StyledShopContent>
          )}
        </StyledShopContentContainer>

        <StyledDescriptionContainer isCardOpen={cardCanOpen as boolean}>
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

        {cardCanOpen && (
          <StyledCardChipsContainer>
            <Chip
              label='Google Map'
              component='a'
              target='_blank'
              href={item.googleMapsUri}
              size='small'
              clickable
              icon={<OpenInNewIcon fontSize='small' />}
              sx={{
                typography: 'body2',
                padding: theme.spacing(0.5),
              }}
            />
            <Chip
              label='規劃路線'
              component='a'
              target='_blank'
              href={`https://www.google.com/maps/dir/?api=1&origin=${station}捷運站&destination=${item.name}&destination_place_id=${item.id}&travelmode=walking&hl=zh-TW
          `}
              size='small'
              clickable
              icon={<OpenInNewIcon fontSize='small' />}
              sx={{
                typography: 'body2',
                padding: theme.spacing(0.5),
              }}
            />
            <Chip
              label='查看評論'
              component='a'
              target='_blank'
              href={`https://search.google.com/local/reviews?placeid=${item.id}&hl=zh-TW&gl=TW`}
              size='small'
              clickable
              icon={<OpenInNewIcon fontSize='small' />}
              sx={{
                typography: 'body2',
                padding: theme.spacing(0.5),
              }}
            />
          </StyledCardChipsContainer>
        )}
      </StyledShopItem>
    </StyledShopItemContainer>
  );
};

export default ShopListItem;
