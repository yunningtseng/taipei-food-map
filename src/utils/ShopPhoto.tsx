import { useFetchPhoto } from '../hooks/useFetchPhoto';
import { Place } from '../types/place';
import {
  StyledNoShopImg,
  StyledShopImg,
} from '../component/shopList/styles/ShopList.styles';

type Props = {
  id: string;
  photoNames: Place['photoNames'];
};

const ShopPhoto = ({ id, photoNames }: Props) => {
  const { data, isLoading } = useFetchPhoto({
    id: id,
    photoName: photoNames.length ? photoNames[0] : '',
  });

  if (isLoading) {
    return <StyledNoShopImg>Loading...</StyledNoShopImg>;
  }

  if (!data && !isLoading) {
    return <StyledNoShopImg>No Image</StyledNoShopImg>;
  }

  return <StyledShopImg src={data} alt='place'></StyledShopImg>;
};
export default ShopPhoto;
