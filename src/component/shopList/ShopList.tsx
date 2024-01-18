import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Hits } from 'react-instantsearch';
import useShopInfoStore from '../../store/useShopInfoStore';
import { ShopHit } from '../../types/shop';
import {
  StyledShop,
  StyledShopImg,
  StyledShopList,
  StyledShopListContainer,
  StyledShopName,
} from './styles/ShopList.styles';
// import ShopPhoto from './ShopPhoto';

type HitProps = {
  hit: ShopHit;
};

const photo = '';

console.log(photo);

function HitComponent({ hit }: HitProps) {
  const setSelectedShop = useShopInfoStore((state) => state.setSelectedShop);
  const setHoveredShop = useShopInfoStore((state) => state.setHoveredShop);

  const handleShopSelection = () => {
    setSelectedShop({
      id: hit.id,
      name: hit.displayName.text,
      description: hit.formattedAddress,
      longitude: hit.location.longitude,
      latitude: hit.location.latitude,
    });
  };

  const handleShopMouseEnter = () => {
    setHoveredShop({
      id: hit.id,
      name: hit.displayName.text,
      description: hit.formattedAddress,
      longitude: hit.location.longitude,
      latitude: hit.location.latitude,
    });
  };

  const handleShopMouseLeave = () => {
    setHoveredShop(null);
  };

  return (
    <StyledShopList
      onClick={handleShopSelection}
      onMouseEnter={handleShopMouseEnter}
      onMouseLeave={handleShopMouseLeave}
    >
      <StyledShopImg
        src='https://lh3.googleusercontent.com/places/ANXAkqENxaR_rd_MGNCPEjwZfWi-lk0qDrCMzNErEZo6IOXM4QYEavjcWdpO20V1mCsh8OiWe42oT6RFbp2SK6nj5stYC5FDz-xnPvg=s4800-w400-h350'
        alt='Place'
      ></StyledShopImg>

      {/* <ShopPhoto /> */}

      <StyledShop>
        <StyledShopName>{hit.displayName.text}</StyledShopName>
        <Typography>{hit.formattedAddress}</Typography>

        <Box display='flex' alignItems='center'>
          <Typography>評分：</Typography>
          <Typography>{hit.rating}</Typography>
        </Box>

        <Box display='flex' alignItems='center'>
          <Typography>評論數：</Typography>
          <Typography>{`${hit.userRatingCount} 則留言`}</Typography>
        </Box>

        <Link
          target='_blank'
          href={hit.googleMapsUri}
          underline='none'
          display='flex'
        >
          <Typography variant='body2' mr={1}>
            查看 Google Map
          </Typography>
          <OpenInNewIcon fontSize='small' />
        </Link>
      </StyledShop>
    </StyledShopList>
  );
}

const ShopList = () => {
  return (
    <StyledShopListContainer>
      <Box minWidth={275} m={1}>
        <Hits hitComponent={HitComponent} />
      </Box>
    </StyledShopListContainer>
  );
};

export default ShopList;
