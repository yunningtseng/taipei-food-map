import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import StraightenIcon from '@mui/icons-material/Straighten';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import useControlOpenListStore from '../../store/useControlList';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { Place } from '../../types/place';
import ShopPhoto from '../../utils/ShopPhoto';
import {
  StyledShopContent,
  StyledShopDescription,
  StyledShopItem,
  StyledShopItemContainer,
  StyledShopName,
  StyledTooltip,
} from './styles/ShopList.styles';
import Button from '@mui/material/Button';

type Props = {
  item: Place;
};

const ShopListItem = ({ item }: Props) => {
  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();

  const station = useQueryShopStore.use.station();

  const isShopOpenList = useControlOpenListStore.use.isShopOpenList();
  const setShopOpenList = useControlOpenListStore.use.setShopOpenList();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShopSelection = () => {
    setShopOpenList(isShopOpenList);
    setSelectedShop({
      id: item.id,
      name: item.displayName,
      address: item.formattedAddress,
      distance: item.distance,
      longitude: item.location.longitude,
      latitude: item.location.latitude,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      photoNames: item.photoNames,
    });
  };

  const handleShopMouseEnter = () => {
    setHoveredShop({
      id: item.id,
      name: item.displayName,
      address: item.formattedAddress,
      distance: item.distance,
      longitude: item.location.longitude,
      latitude: item.location.latitude,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      photoNames: item.photoNames,
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
            <IconButton onClick={handleClick}>
              <MoreVertIcon fontSize='small' />
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
              <Typography variant='body2' mr={1} onClick={handleClose}>
                前往 Google Map
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              target='_blank'
              href={`https://www.google.com/maps/dir/?api=1&origin=${station}捷運站&destination=${item.displayName}&destination_place_id=${item.id}&travelmode=walking&hl=zh-TW
              `}
              underline='none'
              display='flex'
            >
              <Typography variant='body2' mr={1} onClick={handleClose}>
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
              <Typography variant='body2' mr={1} onClick={handleClose}>
                查看評論
              </Typography>
              <OpenInNewIcon fontSize='small' />
            </Link>
          </MenuItem>
        </Menu>

        <StyledShopContent>
          <Box display='flex' gap={0.5}>
            <LocationOnIcon fontSize='small' />
            <StyledShopDescription>
              {item.formattedAddress}
            </StyledShopDescription>
          </Box>

          {item.editorialSummary && (
            <Box width='100%' display='flex' gap={0.5} mt={1}>
              <SellIcon fontSize='small' />
              <StyledShopDescription>
                {item.editorialSummary}
              </StyledShopDescription>
            </Box>
          )}
        </StyledShopContent>

        <Box display='flex' justifyContent='space-between' pl={1} mb={1}>
          <Box display='flex' width='100%' gap={2} alignItems='center'>
            <StyledTooltip title='評分數（評論數）' placement='top' arrow>
              <Box display='flex' alignItems='center' gap={0.5}>
                <StarIcon fontSize='small' />
                <Typography>{`${item.rating} (${item.userRatingCount})`}</Typography>
              </Box>
            </StyledTooltip>

            <StyledTooltip
              title={`距離${station}捷運站${item.distance}公尺`}
              placement='top'
              arrow
            >
              <Box display='flex' alignItems='center' gap={0.5}>
                <StraightenIcon fontSize='small' />
                <Typography>{`${item.distance}m`}</Typography>
              </Box>
            </StyledTooltip>
          </Box>

          <CardActions disableSpacing>
            <Button
              onClick={() => {
                setShopOpenList(isShopOpenList);
              }}
            >
              位置
            </Button>

            <StyledTooltip title='收藏' placement='top' arrow>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon fontSize='small' />
              </IconButton>
            </StyledTooltip>
          </CardActions>
        </Box>
      </StyledShopItem>
    </StyledShopItemContainer>
  );
};

export default ShopListItem;
