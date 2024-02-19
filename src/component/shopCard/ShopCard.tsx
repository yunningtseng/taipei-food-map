import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useCardOpenStore from '../../store/useListOpenStore';
import { Place } from '../../types/place';
import {
  StyledCardCloseButton,
  StyledCardWrapper,
} from '../shopCard/styles/ShopCard.styles';
import ShopListItem from '../shopItem/ShopListItem';

const ShopCard = () => {
  const setCardOpen = useCardOpenStore.use.setCardOpen();
  const selectedShop = useShopInfoStore.use.selectedShop();
  const hoveredShop = useShopInfoStore.use.hoveredShop();

  const item = (selectedShop || hoveredShop) as Place;
  const openShopList = () => {
    setCardOpen(false);
  };

  return (
    <StyledCardWrapper>
      <ShopListItem key={item.id} item={item} />
      <StyledCardCloseButton onClick={openShopList}>
        <HighlightOffIcon fontSize='small' />
      </StyledCardCloseButton>
    </StyledCardWrapper>
  );
};

export default ShopCard;
