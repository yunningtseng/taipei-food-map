import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import useQueryShopStore from '../../store/useQueryShopStore';
import { Place } from '../../types/place';

type Props = {
  item: Place;
};

const StyledCardChipsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(1, 1, 1, 0),
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const ShopCardMenu = ({ item }: Props) => {
  const theme = useTheme();
  const station = useQueryShopStore.use.station();

  return (
    <>
      <StyledCardChipsContainer>
        <Chip
          label='Google Map'
          component='a'
          target='_blank'
          href={item.googleMapsUri}
          size='small'
          clickable
          icon={<OpenInNewIcon fontSize='small' />}
          sx={{
            typography: 'body2',
            padding: theme.spacing(0.5),
          }}
        />
        <Chip
          label='規劃路線'
          component='a'
          target='_blank'
          href={`https://www.google.com/maps/dir/?api=1&origin=${station}捷運站&destination=${item.name}&destination_place_id=${item.id}&travelmode=walking&hl=zh-TW
          `}
          size='small'
          clickable
          icon={<OpenInNewIcon fontSize='small' />}
          sx={{
            typography: 'body2',
            padding: theme.spacing(0.5),
          }}
        />
        <Chip
          label='查看評論'
          component='a'
          target='_blank'
          href={`https://search.google.com/local/reviews?placeid=${item.id}&hl=zh-TW&gl=TW`}
          size='small'
          clickable
          icon={<OpenInNewIcon fontSize='small' />}
          sx={{
            typography: 'body2',
            padding: theme.spacing(0.5),
          }}
        />
      </StyledCardChipsContainer>
    </>
  );
};

export default ShopCardMenu;
