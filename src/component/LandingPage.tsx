import Box from '@mui/material/Box';
import { Configure, InstantSearch } from 'react-instantsearch';
import { searchClient } from '../utils/algolia';
import FilterSection from './filterMenu/FilterSection';
import ShopDetail from './shopList/ShopDetail';
import ShopList from './shopList/ShopList';
import MapFilter from './shopMap/ShopMap';

const LandingPage = () => {
  return (
    <div>
      <Box
        display='flex'
        position='relative'
        height='calc(100vh - 4.5rem)'
        pt={6}
      >
        <InstantSearch
          indexName='places'
          searchClient={searchClient}
          routing={true}
          insights={true}
        >
          <Configure />
          <FilterSection />
          <ShopList />
          <Box position='relative'>
            <ShopDetail />
            <MapFilter />
          </Box>
        </InstantSearch>
      </Box>
    </div>
  );
};

export default LandingPage;
