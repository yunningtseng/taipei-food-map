import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import ShopListItem from './ShopListItem';
import { StyledShopListContainer } from './styles/ShopList.styles';

const ShopList = () => {
  const { data, isLoading } = useFetchPlaces();

  if (isLoading) return <Box width={530}>Loading...</Box>;

  if (!data) return <div>No data.</div>;

  return (
    <StyledShopListContainer>
      <Box minWidth={530} m={1}>
        {data.map((item) => (
          <ShopListItem key={item.id} item={item} />
        ))}
        <Typography>資料到底囉！</Typography>
      </Box>
    </StyledShopListContainer>
  );
};

export default ShopList;
