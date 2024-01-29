import Box from '@mui/material/Box';
import mrt from '../../data/mrt.json';
import { lineInfo } from '../const/lineInfo';
import Dropdown from './filterMenu/Dropdown';
import MenuSelect from './filterMenu/MenuSelect';
import TwoColumnMenuSelect from './filterMenu/TwoColumnMenuSelect';
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
          <Dropdown selectKey='foodType'>
            <MenuSelect
              selectKey='foodType'
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
          </Dropdown>

          <Dropdown selectKey='station'>
            <TwoColumnMenuSelect
              leftSelectKey='line'
              rightSelectKey='station'
              leftColumnOptions={lineInfo}
              rightColumnOptions={mrt}
            />
          </Dropdown>

          <Dropdown selectKey='minRating'>
            <MenuSelect
              selectKey='minRating'
              options={['不限', '4.5', '4', '3.5', '3']}
            />
          </Dropdown>

          <Dropdown selectKey='sortBy'>
            <MenuSelect
              selectKey='sortBy'
              options={['相關度', '評分數', '評論數']}
            />
          </Dropdown>
        </Box>

        <ShopList />
      </Box>

      <ShopMap />
    </Box>
  );
};

export default LandingPage;
