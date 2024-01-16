import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Highlight, Hits } from 'react-instantsearch';
import useShopInfoStore from '../../store/useShopInfoStore';
import { ShopHit } from '../../types/shop';
import {
  StyledHighlight,
  StyledShop,
  StyledShopList,
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
      <Box>Image</Box>
      <StyledShop>
        <StyledHighlight hit={hit} attribute='displayName.text' />
        <Highlight hit={hit} attribute='nationalPhoneNumber' />
        <Highlight hit={hit} attribute='formattedAddress' />
      </StyledShop>
    </StyledShopList>
  );
}

const ShopList = () => {
  return (
    <Box>
      <Typography variant='h6' textAlign='center'>
        Shop List
      </Typography>

      <Box display='flex'>
        <Box minWidth={275} m={1}>
          <Hits hitComponent={HitComponent} />
        </Box>
      </Box>
    </Box>
  );
};

export default ShopList;
