import { styled } from '@mui/material/styles';
import { Popup } from 'react-map-gl';

const StyledPopup = styled(Popup)(({ theme }) => ({
  '& .mapboxgl-popup-content': {
    padding: theme.spacing(0.5),
    border: '2px solid #ccc',
    borderRadius: '5%',
    backgroundColor: '#F2F1EB',
  },
  '& .mapboxgl-popup-tip': {
    border: 0,
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledShopName = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  width: '12rem',
  display: '-webkit-box',
  marginBottom: theme.spacing(1),
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
}));

const StyledDescription = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  width: '11rem',
  marginLeft: theme.spacing(0.5),
  marginBottom: theme.spacing(1),
}));

export { StyledDescription, StyledPopup, StyledShopName };
