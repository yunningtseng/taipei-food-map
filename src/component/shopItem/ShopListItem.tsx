import { useMediaQuery, useTheme } from '@mui/material';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useCardOpenStore from '../../store/useListOpenStore';
import { Place } from '../../types/place';
import ShopContent from '../shopItem/ShopContent';
import ShopPhoto from '../shopItem/ShopPhoto';
import { StyledShopItemContainer } from './styles/ShopItem.styles';

type Props = {
  item: Place;
  shopNumber?: number;
};

const ShopListItem = ({ item, shopNumber }: Props) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();

  const setCardOpen = useCardOpenStore.use.setCardOpen();
  const isCardOpen = useCardOpenStore.use.isCardOpen();

  const selectedShop = useShopInfoStore.use.selectedShop();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  const cardCanOpen = isCardOpen && smDown && selectedShop;

  const handleShopSelection = () => {
    setCardOpen(true);
    scrollToTop();

    setSelectedShop({
      id: item.id,
      name: item.name,
      address: item.address,
      distance: item.distance,
      longitude: item.longitude,
      latitude: item.latitude,
      googleMapsUri: item.googleMapsUri,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      editorialSummary: item.editorialSummary,
      photoNames: item.photoNames,
    });
  };

  const handleShopMouseEnter = () => {
    setHoveredShop({
      id: item.id,
      name: item.name,
      address: item.address,
      distance: item.distance,
      longitude: item.longitude,
      latitude: item.latitude,
      googleMapsUri: item.googleMapsUri,
      rating: item.rating,
      userRatingCount: item.userRatingCount,
      editorialSummary: item.editorialSummary,
      photoNames: item.photoNames,
    });
  };

  const handleShopMouseLeave = () => {
    setHoveredShop(null);
  };

  return (
    <StyledShopItemContainer
      shopNumber={shopNumber as number}
      isCardOpen={cardCanOpen as boolean}
      onClick={handleShopSelection}
      onMouseEnter={handleShopMouseEnter}
      onMouseLeave={handleShopMouseLeave}
    >
      <ShopPhoto
        id={item.id}
        photoNames={item.photoNames}
        isSmallSize={false}
      />

      <ShopContent item={item} type='list' />
    </StyledShopItemContainer>
  );
};

export default ShopListItem;
