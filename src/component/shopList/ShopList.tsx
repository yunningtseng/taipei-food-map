import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Highlight, Hits } from 'react-instantsearch';
import {
  StyledHighlight,
  StyledShop,
  StyledShopList,
} from './styles/ShopList.styles';
import { ShopHit } from '../../types/shop';

type HitProps = {
  hit: ShopHit;
};

function HitComponent({ hit }: HitProps) {
  return (
    <StyledShopList>
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
