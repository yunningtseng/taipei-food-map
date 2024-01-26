import Box from '@mui/material/Box';
import FilterSection from './filterMenu/FilterSection';
import ShopDetail from './shopList/ShopDetail';
import ShopList from './shopList/ShopList';
import ShopMap from './shopMap/ShopMap';

const LandingPage = () => {
  return (
    <div>
      <Box
        display='flex'
        position='relative'
        height='calc(100vh - 4.5rem)'
        pt={6}
      >
        <FilterSection />
        <ShopList />
        <Box position='relative'>
          <ShopDetail />
          <ShopMap />
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
