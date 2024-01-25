import { useFetchShopPhoto } from '../../hooks/useFetchShopPhoto';
import { Place } from '../../types/place';
import { StyledShopImg } from './styles/ShopList.styles';

type PhotoComponentProps = {
  item: Place;
  index: number;
};

const ShopPhoto = ({ item, index }: PhotoComponentProps) => {
  const savedImgUrl = item.imgUrls[index.toString()];
  const hasImgUrl = savedImgUrl !== undefined;

  const { fetchedUrl, isLoading } = useFetchShopPhoto(
    hasImgUrl ? '' : item.photoNames[index],
    // item.id,
    // index
  );
  const imgUrl = hasImgUrl ? savedImgUrl : fetchedUrl;

  if (!hasImgUrl && isLoading) {
    return 'Loading...';
  }

  return <StyledShopImg src={imgUrl} alt='place'></StyledShopImg>;
};
export default ShopPhoto;
