import { useFetchShopPhoto } from '../../hooks/useFetchShopPhoto';
import { ShopHit } from '../../types/shop';
import { StyledShopImg } from './styles/ShopList.styles';

type PhotoComponentProps = {
  hit: ShopHit;
  index: number;
};

const ShopPhoto = ({ hit, index }: PhotoComponentProps) => {
  const savedImgUrl = hit.imgUrls[index.toString()];
  const hasImgUrl = savedImgUrl !== undefined;

  const { fetchedUrl, isLoading } = useFetchShopPhoto(
    hasImgUrl ? '' : hit.photoNames[index],
    hit.id,
    index
  );
  const imgUrl = hasImgUrl ? savedImgUrl : fetchedUrl;

  if (!hasImgUrl && isLoading) {
    return 'Loading...';
  }

  return <StyledShopImg src={imgUrl} alt='place'></StyledShopImg>;
};
export default ShopPhoto;
