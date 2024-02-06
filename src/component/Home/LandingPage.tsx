import { useMediaQuery, useTheme } from '@mui/material';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useListOpenStore from '../../store/useListOpenStore';
import FilterGroups from '../filterMenu/FilterGroups';
import ShopCard from '../shopList/ShopCard';
import ShopList from '../shopList/ShopList';
import ShopMap from '../shopMap/ShopMap';
import {
  StyledDivider,
  StyledHiddenDiv,
  StyledShopListWrapper,
  StyledShopMap,
  StyledWrapper,
} from './styles/LandingPage.styles';

const LandingPage = () => {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const isShopListOpen = useListOpenStore.use.isShopListOpen();
  const selectedShop = useShopInfoStore.use.selectedShop();
  // const hoveredShop = useShopInfoStore.use.hoveredShop();
  // console.log(selectedShop, hoveredShop);

  const shop = selectedShop;

  return (
    <StyledWrapper>
      <StyledShopMap>
        <ShopMap />
      </StyledShopMap>

      {lgDown && <FilterGroups />}

      {/* TODO */}
      {smDown && !isShopListOpen && shop && <ShopCard />}

      {(!smDown || isShopListOpen || !shop) && (
        <>
          <StyledHiddenDiv />
          <StyledShopListWrapper>
            {!lgDown && <FilterGroups />}
            <StyledDivider />
            <ShopList />
          </StyledShopListWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

export default LandingPage;
