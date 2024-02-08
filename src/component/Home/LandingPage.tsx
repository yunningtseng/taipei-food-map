import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMediaQuery, useTheme } from '@mui/material';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useCardOpenStore from '../../store/useListOpenStore';
import FilterGroups from '../filterMenu/FilterGroups';
import ShopCard from '../shopList/ShopCard';
import ShopList from '../shopList/ShopList';
import {
  StyledCardCloseButton,
  StyledCardWrapper,
} from '../shopList/styles/ShopCard.styles';
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

  const isCardOpen = useCardOpenStore.use.isCardOpen();
  const selectedShop = useShopInfoStore.use.selectedShop();

  const setCardOpen = useCardOpenStore.use.setCardOpen();

  const openShopList = () => {
    setCardOpen(false);
  };

  const cardCanOpen = isCardOpen && smDown && selectedShop;

  return (
    <StyledWrapper>
      <StyledShopMap>
        <ShopMap />
      </StyledShopMap>

      {lgDown && <FilterGroups />}

      {cardCanOpen && (
        <StyledCardWrapper>
          <ShopCard />
          <StyledCardCloseButton onClick={openShopList}>
            <HighlightOffIcon fontSize='small' />
          </StyledCardCloseButton>
        </StyledCardWrapper>
      )}

      {!cardCanOpen && (
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
