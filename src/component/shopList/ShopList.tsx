import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Hit as AlgoliaHit } from 'instantsearch.js';
import { Highlight, Hits, useInfiniteHits } from 'react-instantsearch';
import {
  StyledHighlight,
  StyledShop,
  StyledShopList,
} from './styles/ShopList.styles';

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    nationalPhoneNumber: string;
    formattedAddress: string;
  }>;
};

function Hit({ hit }: HitProps) {
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
  useInfiniteHits();
  return (
    <Box>
      <Typography variant='h6' textAlign='center'>
        Shop List
      </Typography>

      <Box display='flex'>
        <Box minWidth={275} m={1}>
          <Hits hitComponent={Hit} />
        </Box>

        {/* <Box>
          <Hits hitComponent={Hit} />
          <Pagination />
        </Box> */}

        {/* <InfiniteHits showPrevious={false} hitComponent={Hit} /> */}

        <Box minWidth={500}>Google Map</Box>
      </Box>
    </Box>
  );
};

export default ShopList;
