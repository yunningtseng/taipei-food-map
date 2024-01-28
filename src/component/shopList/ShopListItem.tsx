import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import { Place } from '../../types/place';
import {
  StyledShop,
  StyledShopContainer,
  StyledShopContent,
  StyledShopName,
  StyledTooltip,
} from './styles/ShopList.styles';
// import ShopPhoto from './ShopPhoto';

type ShopListItemProps = {
  item: Place;
};

const ShopListItem = ({ item }: ShopListItemProps) => {
  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShopSelection = () => {
    setSelectedShop({
      id: item.id,
      name: item.displayName,
      address: item.formattedAddress,
      longitude: item.location.longitude,
      latitude: item.location.latitude,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
    });
  };

  const handleShopMouseEnter = () => {
    setHoveredShop({
      id: item.id,
      name: item.displayName,
      address: item.formattedAddress,
      longitude: item.location.longitude,
      latitude: item.location.latitude,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
    });
  };

  const handleShopMouseLeave = () => {
    setHoveredShop(null);
  };

  return (
    <StyledShopContainer
      onClick={handleShopSelection}
      onMouseEnter={handleShopMouseEnter}
      onMouseLeave={handleShopMouseLeave}
    >
      {/* <ShopPhoto item={item} index={0} /> */}
      <StyledShop>
        <StyledShopName
          action={
            <IconButton aria-label='settings' onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.displayName}
        />
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>
            <Link
              target='_blank'
              href={item.googleMapsUri}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1}>
                前往 Google Map
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              target='_blank'
              href={item.googleMapsUri}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1}>
                規劃路線
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              target='_blank'
              href={item.googleMapsUri}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1}>
                查看評論
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </MenuItem>
        </Menu>

        <StyledShopContent>
          <Box display='flex' gap={1}>
            <LocationOnIcon fontSize='small' />
            <Typography variant='body2' width={256}>
              {item.formattedAddress}
            </Typography>
          </Box>

          {item.editorialSummary && (
            <Box display='flex' gap={1} mt={1}>
              <SellIcon fontSize='small' />
              <Typography variant='body2'>{item.editorialSummary}</Typography>
            </Box>
          )}
        </StyledShopContent>
        <Box display='flex' justifyContent='space-between' pl={2}>
          <Box display='flex' gap={2} alignItems='center'>
            <StyledTooltip title='評分數' placement='top' arrow>
              <Box display='flex' alignItems='center' gap={1}>
                <StarIcon fontSize='small' />
                <Typography>{item.rating}</Typography>
              </Box>
            </StyledTooltip>

            <StyledTooltip title='評論數' placement='top' arrow>
              <Box display='flex' alignItems='center' gap={1}>
                <MessageIcon fontSize='small' />
                <Typography>{item.userRatingCount}</Typography>
              </Box>
            </StyledTooltip>
          </Box>

          <CardActions disableSpacing>
            <StyledTooltip title='收藏' placement='top' arrow>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
            </StyledTooltip>
          </CardActions>
        </Box>
      </StyledShop>
    </StyledShopContainer>
  );
};

export default ShopListItem;
