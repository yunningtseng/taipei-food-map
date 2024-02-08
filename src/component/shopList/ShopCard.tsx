import useShopInfoStore from '../../store/useGetShopInfoStore';
import { Place } from '../../types/place';
import ShopListItem from './ShopListItem';

const ShopCard = () => {
  const selectedShop = useShopInfoStore.use.selectedShop();
  const hoveredShop = useShopInfoStore.use.hoveredShop();

  const item = (selectedShop || hoveredShop) as Place;

  return <ShopListItem key={item.id} item={item} />;
};

export default ShopCard;
