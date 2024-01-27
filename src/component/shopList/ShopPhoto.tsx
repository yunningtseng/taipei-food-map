import { useFetchShopPhoto } from '../../hooks/useFetchShopPhoto';
import { Place } from '../../types/place';
import { StyledNoShopImg, StyledShopImg } from './styles/ShopList.styles';

type PhotoComponentProps = {
  item: Place;
  index: number;
};

const ShopPhoto = ({ item, index }: PhotoComponentProps) => {
  const savedImgUrl = item.imgUrls[index.toString()];
  const hasImgUrl = savedImgUrl !== undefined;

  const { fetchedUrl, isLoading } = useFetchShopPhoto(
    hasImgUrl ? '' : item.photoNames[index]
    // item.id,
    // index
  );
  const imgUrl = hasImgUrl ? savedImgUrl : fetchedUrl;

  if (!hasImgUrl && isLoading) {
    return <StyledNoShopImg>Loading...</StyledNoShopImg>;
  }

  if (!imgUrl) {
    return <StyledNoShopImg>No Image</StyledNoShopImg>;
  }

  return <StyledShopImg src={imgUrl} alt='place'></StyledShopImg>;
};
export default ShopPhoto;
