import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Highlight, Hits } from 'react-instantsearch';
import useShopInfoStore from '../../store/useShopInfoStore';
import { ShopHit } from '../../types/shop';
import {
  StyledHighlight,
  StyledShop,
  StyledShopImg,
  StyledShopList,
  StyledShopListContainer,
} from './styles/ShopList.styles';

type HitProps = {
  hit: ShopHit;
};

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
      <StyledShopImg />
      <StyledShop>
        <StyledHighlight hit={hit} attribute='displayName.text' />
        <Highlight hit={hit} attribute='formattedAddress' />
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
