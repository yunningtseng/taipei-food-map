import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useListOpenStore from '../../store/useListOpenStore';
import { Place } from '../../types/place';
import ShopListItem from './ShopListItem';
import { StyledShopCardWrapper } from './styles/ShopCard.styles';
const ShopCard = () => {
  const setShopListOpen = useListOpenStore.use.setShopListOpen();

  const selectedShop = useShopInfoStore.use.selectedShop();
  const hoveredShop = useShopInfoStore.use.hoveredShop();

  const item = (selectedShop || hoveredShop) as Place;

  const openShopList = () => {
    setShopListOpen(true);
  };

  // console.log(item);

  return (
    <StyledShopCardWrapper>
      <ShopListItem key={item.id} item={item} />
      <HighlightOffIcon fontSize='small' onClick={openShopList} />
    </StyledShopCardWrapper>
  );
};

export default ShopCard;
