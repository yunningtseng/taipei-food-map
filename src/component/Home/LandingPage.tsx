import { useMediaQuery, useTheme } from '@mui/material';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useCardOpenStore from '../../store/useListOpenStore';
import FilterGroups from '../filterMenu/FilterGroups';
import ShopCard from '../shopCard/ShopCard';
import ShopListContainer from '../shopList/ShopListContainer';
import ShopMap from '../shopMap/ShopMap';
import { StyledShopMap, StyledWrapper } from './styles/LandingPage.styles';

const LandingPage = () => {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const isCardOpen = useCardOpenStore.use.isCardOpen();
  const selectedShop = useShopInfoStore.use.selectedShop();

  const cardCanOpen = isCardOpen && smDown && selectedShop;

  return (
    <StyledWrapper>
      <StyledShopMap>
        <ShopMap />
      </StyledShopMap>

      {lgDown && <FilterGroups />}
      {cardCanOpen && <ShopCard />}
      {!cardCanOpen && <ShopListContainer />}
    </StyledWrapper>
  );
};

export default LandingPage;
