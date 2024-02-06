import { useFetchPhoto } from '../hooks/useFetchPhoto';
import { Place } from '../types/place';
import {
  StyledNoShopImg,
  StyledShopImg,
} from '../component/shopList/styles/ShopList.styles';
import Box from '@mui/material/Box';

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
    return <StyledNoShopImg>Loading...</StyledNoShopImg>;
  }

  if (!data && !isLoading) {
    return <StyledNoShopImg>No Image</StyledNoShopImg>;
  }

  return (
    <Box display='flex' justifyContent='center'>
      <StyledShopImg
        src={data}
        alt='place'
        isSmallSize={isSmallSize}
      ></StyledShopImg>
    </Box>
  );
};
export default ShopPhoto;
