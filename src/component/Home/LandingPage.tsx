import Box from '@mui/material/Box';
import mrt from '../../../data/mrt.json';
import { lineInfo } from '../../const/lineInfo';
import useControlOpenListStore from '../../store/useControlList';
import Dropdown from '../filterMenu/Dropdown';
import MenuSelect from '../filterMenu/MenuSelect';
import TwoColumnMenuSelect from '../filterMenu/TwoColumnMenuSelect';
import ShopList from '../shopList/ShopList';
import ShopMap from '../shopMap/ShopMap';
import {
  StyledButton,
  StyledContainer,
  StyledFilter,
  StyledShopListWrapper,
  StyledShopMap,
} from './styles/LandingPage.styles';

const LandingPage = () => {
  const isShopOpenList = useControlOpenListStore.use.isShopOpenList();
  const setShopOpenList = useControlOpenListStore.use.setShopOpenList();

  const handleClickButton = () => {
    setShopOpenList(isShopOpenList);
  };

  return (
    <StyledContainer isShopOpenList={isShopOpenList}>
      <Box>
        <Box display='flex' justifyContent='space-between' mb={1}>
          <StyledFilter>
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
          </StyledFilter>

          <StyledButton
            variant='contained'
            size='medium'
            onClick={handleClickButton}
          >
            {isShopOpenList ? '顯示地圖' : '顯示列表'}
          </StyledButton>
        </Box>

        <StyledShopListWrapper isShopOpenList={isShopOpenList}>
          <ShopList />
        </StyledShopListWrapper>
      </Box>

      <StyledShopMap isShopOpenList={isShopOpenList}>
        <ShopMap />
      </StyledShopMap>
    </StyledContainer>
  );
};

export default LandingPage;
