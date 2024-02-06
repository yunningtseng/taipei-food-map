// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import StraightenIcon from '@mui/icons-material/Straighten';
import Box from '@mui/material/Box';
// import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { MouseEvent, useRef, useState } from 'react';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useListOpenStore from '../../store/useListOpenStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { Place } from '../../types/place';
import ShopPhoto from '../../utils/ShopPhoto';
import {
  StyledMenuItem,
  StyledShopContent,
  StyledShopContentContainer,
  StyledShopDescription,
  StyledShopItem,
  StyledShopItemContainer,
  StyledShopMenuIcon,
  StyledShopName,
  StyledTooltip,
} from './styles/ShopList.styles';

type Props = {
  item: Place;
};

const ShopListItem = ({ item }: Props) => {
  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();

  const station = useQueryShopStore.use.station();

  const setShopListOpen = useListOpenStore.use.setShopListOpen();

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

  const handleShopSelection = () => {
    setShopListOpen(false);

    setSelectedShop({
      id: item.id,
      displayName: item.displayName,
      address: item.address,
      distance: item.distance,
      longitude: item.longitude,
      latitude: item.latitude,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      photoNames: item.photoNames,
      editorialSummary: item.editorialSummary,
    });
  };

  const handleShopMouseEnter = () => {
    setHoveredShop({
      id: item.id,
      displayName: item.displayName,
      address: item.address,
      distance: item.distance,
      longitude: item.longitude,
      latitude: item.latitude,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      photoNames: item.photoNames,
      editorialSummary: item.editorialSummary,
    });
  };

  const handleShopMouseLeave = () => {
    setHoveredShop(null);
  };

  return (
    <StyledShopItemContainer
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
            <StyledShopMenuIcon>
              <IconButton ref={moreIconButtonRef} onClick={handleOpenMenu}>
                <MoreVertIcon fontSize='small' />
              </IconButton>
            </StyledShopMenuIcon>
          }
          title={item.displayName}
        />

        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={moreIconButtonRef.current}
          open={menuOpen}
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
            <Link
              target='_blank'
              href={item.googleMapsUri}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' onClick={handleCloseMenu}>
                前往 Google Map
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link
              target='_blank'
              href={`https://www.google.com/maps/dir/?api=1&origin=${station}捷運站&destination=${item.displayName}&destination_place_id=${item.id}&travelmode=walking&hl=zh-TW
              `}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1} onClick={handleCloseMenu}>
                規劃路線
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link
              target='_blank'
              href={`https://search.google.com/local/reviews?placeid=${item.id}&hl=zh-TW&gl=TW`}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1} onClick={handleCloseMenu}>
                查看評論
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </StyledMenuItem>
        </Menu>

        <StyledShopContentContainer>
          <Box display='flex' gap={0.5}>
            <StyledShopContent>{item.address}</StyledShopContent>
          </Box>

          {item.editorialSummary && (
            <Box width='100%' display='flex' gap={0.5} mt={1}>
              <StyledShopContent>{item.editorialSummary}</StyledShopContent>
            </Box>
          )}
        </StyledShopContentContainer>

        <Box display='flex' justifyContent='space-between' pl={1} mb={1}>
          <Box display='flex' width='100%' gap={2} alignItems='center'>
            <StyledTooltip title='評分數（評論數）' placement='top' arrow>
              <StyledShopDescription>
                <StarIcon fontSize='small' />
                {`${item.rating} (${item.userRatingCount})`}
              </StyledShopDescription>
            </StyledTooltip>

            <StyledTooltip title='離捷運站直線距離(公尺)' placement='top' arrow>
              <StyledShopDescription>
                <StraightenIcon fontSize='small' />
                {`${item.distance}m`}
              </StyledShopDescription>
            </StyledTooltip>
          </Box>

          {/* <CardActions disableSpacing>
            <StyledTooltip title='收藏' placement='top' arrow>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon fontSize='small' />
              </IconButton>
            </StyledTooltip>
          </CardActions> */}
        </Box>
      </StyledShopItem>
    </StyledShopItemContainer>
  );
};

export default ShopListItem;
