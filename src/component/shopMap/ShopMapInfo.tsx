import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Popup } from 'react-map-gl';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import ShopContent from '../shopItem/ShopContent';
import ShopPhoto from '../shopItem/ShopPhoto';

type Props = {
  type: 'selectedShop' | 'hoveredShop';
};

const StyledPopup = styled(Popup)(({ theme }) => ({
  '& .mapboxgl-popup-content': {
    width: '22rem',
    padding: theme.spacing(0.5),
    border: '2px solid #ccc',
    borderRadius: '5%',
  },

  '& .mapboxgl-popup-tip': {
    border: 0,
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ShopMapInfo = ({ type }: Props) => {
  const shopData = useShopInfoStore.use[type]();

  if (!shopData) {
    return null;
  }

  const { id, longitude, latitude, photoNames } = shopData;

  return (
    <StyledPopup
      key={Math.random()}
      closeButton={false}
      longitude={longitude}
      latitude={latitude}
      offset={24}
      maxWidth='22rem'
    >
      <Box display='flex'>
        <ShopPhoto id={id} photoNames={photoNames} isSmallSize />
        <ShopContent item={shopData} type='map' />
      </Box>
    </StyledPopup>
  );
};

export default ShopMapInfo;
