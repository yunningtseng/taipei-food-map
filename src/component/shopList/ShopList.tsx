import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useMemo } from 'react';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import useQueryShopStore from '../../store/useQueryShopStore';
import ShopListItem from './ShopListItem';
import { StyledShopIListContainer } from './styles/ShopList.styles';

const ShopList = () => {
  const { data, isLoading } = useFetchPlaces();
  const sortBy = useQueryShopStore.use.sortBy();

  const sortedData = useMemo(() => {
    if (!data) return;

    const newData = [...data];
    if (sortBy === '評分數') {
      newData.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === '評論數') {
      newData.sort((a, b) => b.userRatingCount - a.userRatingCount);
    }
    return newData;
  }, [data, sortBy]);

  if (isLoading)
    return (
      <Box width='26rem' height='100%'>
        <Skeleton variant='rectangular' width='100%' height='100%' />
      </Box>
    );

  if (!sortedData)
    return (
      <Box
        width='100%'
        height='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        查無資料
      </Box>
    );

  return (
    <StyledShopIListContainer>
      {sortedData.map((item) => (
        <ShopListItem key={item.id} item={item} />
      ))}
    </StyledShopIListContainer>
  );
};

export default ShopList;
