import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import ShopListItem from './ShopListItem';
import SortFilter from './ShopSorter';
import { StyledShopListContainer } from './styles/ShopList.styles';

const ShopList = () => {
  const { data, isLoading } = useFetchPlaces();

  if (isLoading) return <Box width={575}>Loading...</Box>;

  if (!data) return <div>No data.</div>;

  return (
    <Box mt={3}>
      <SortFilter />
      <StyledShopListContainer>
        <Box minWidth={275} m={1}>
          {data.map((item) => (
            <ShopListItem key={item.id} item={item} />
          ))}
          <Typography>資料到底囉！</Typography>
        </Box>
      </StyledShopListContainer>
    </Box>
  );
};

export default ShopList;
