import Box from '@mui/material/Box';
import FilterSection from './filterMenu/FilterSection';
import ShopList from './shopList/ShopList';
import ShopMap from './shopMap/ShopMap';

const LandingPage = () => {
  return (
    <Box
      display='flex'
      position='relative'
      height='calc(100vh - 6rem)'
      pt={12}
      mx={5}
    >
      <Box>
        <Box display='flex' gap={3}>
          <FilterSection
            type='category'
            title='種類'
            options={[
              '蛋糕',
              '豆花',
              '冰品飲料',
              '冰淇淋',
              '麵包',
              '餅乾',
              '巧克力',
            ]}
          />
          <FilterSection type='mrt' title='捷運站' />

          <FilterSection
            type='general'
            title='評分'
            options={['不限', '4.5', '4', '3.5', '3']}
          />

          <FilterSection
            type='general'
            title='排序'
            options={['相關度', '評分數', '評論數']}
          />
        </Box>

        <ShopList />
      </Box>

      <ShopMap />
    </Box>
  );
};

export default LandingPage;
