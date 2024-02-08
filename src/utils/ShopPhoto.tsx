import { useFetchPhoto } from '../hooks/useFetchPhoto';
import { Place } from '../types/place';
import {
  StyledNoShopImg,
  StyledShopImg,
} from '../component/shopList/styles/ShopList.styles';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

type Props = {
  id: string;
  photoNames: Place['photoNames'];
  isSmallSize: boolean;
};

const ShopPhoto = ({ id, photoNames, isSmallSize }: Props) => {
  const { data, isLoading } = useFetchPhoto({
    id: id,
    photoName: photoNames?.length ? photoNames[0] : '',
  });

  if (isLoading) {
    return (
      <StyledNoShopImg>
        <Skeleton
          variant='rectangular'
          width='100%'
          height='100%'
        />
      </StyledNoShopImg>
    );
  }

  if (!data && !isLoading) {
    return <StyledNoShopImg>未提供圖片</StyledNoShopImg>;
  }

  return (
    <Box display='flex' justifyContent='center' height='100%'>
      <StyledShopImg
        src={data}
        alt='place'
        isSmallSize={isSmallSize}
      ></StyledShopImg>
    </Box>
  );
};
export default ShopPhoto;
