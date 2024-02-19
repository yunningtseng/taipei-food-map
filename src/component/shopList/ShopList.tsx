import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import useQueryShopStore from '../../store/useQueryShopStore';
import ShopListItem from '../shopItem/ShopListItem';
import ShopSkeleton from './ShopSkeleton';

const StyledShopIListContainer = styled('div')(({ theme }) => ({
  maxWidth: '26rem',
  overflow: 'hidden',
  overflowY: 'auto',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginRight: theme.spacing(0),
  },
}));

const ShopList = () => {
  const { data, isLoading } = useFetchPlaces();
  const sortBy = useQueryShopStore.use.sortBy();

  const sortedData = useMemo(() => {
    if (!data) return;

    const newData = [...data];
    if (sortBy === '評分') {
      newData.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === '評論數') {
      newData.sort((a, b) => b.userRatingCount - a.userRatingCount);
    }
    return newData;
  }, [data, sortBy]);

  if (isLoading) return <ShopSkeleton />;

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

  const shopNumber = sortedData.length;

  return (
    <StyledShopIListContainer>
      {sortedData.map((item) => (
        <ShopListItem key={item.id} item={item} shopNumber={shopNumber} />
      ))}
    </StyledShopIListContainer>
  );
};

export default ShopList;
