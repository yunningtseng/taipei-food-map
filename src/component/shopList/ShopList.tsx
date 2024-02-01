import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import useQueryShopStore from '../../store/useQueryShopStore';
import ShopListItem from './ShopListItem';
import {
  StyledShopIListContainer,
  StyledShopListWrapper,
} from './styles/ShopList.styles';

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

  if (isLoading) return <Box width={400}>Loading...</Box>;

  if (!sortedData) return <div>No data.</div>;

  return (
    <StyledShopListWrapper>
      <StyledShopIListContainer>
        {sortedData.map((item) => (
          <ShopListItem key={item.id} item={item} />
        ))}
      </StyledShopIListContainer>
    </StyledShopListWrapper>
  );
};

export default ShopList;
