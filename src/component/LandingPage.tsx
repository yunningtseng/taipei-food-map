import Box from '@mui/material/Box';
import { Configure, InstantSearch } from 'react-instantsearch';
import { searchClient } from '../utils/algolia';
import Menu from './sideBar/Drawer';
import ShopList from './shopList/ShopList';

const LandingPage = () => {
  return (
    <Box display='flex' position='relative' height='calc(100vh - 64px)' pt={8}>
      <InstantSearch
        indexName='places'
        searchClient={searchClient}
        routing={true}
        insights={true}
      >
        <Configure hitsPerPage={20} />
        <Menu />
        <ShopList />
      </InstantSearch>
    </Box>
  );
};

export default LandingPage;
