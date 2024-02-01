import { styled } from '@mui/material/styles';
import { Popup } from 'react-map-gl';

const StyledPopup = styled(Popup)(({ theme }) => ({
  '& .mapboxgl-popup-content': {
    width: '22rem',
    padding: theme.spacing(0.75),
    border: '2px solid #ccc',
    borderRadius: '5%',
    backgroundColor: theme.palette.grey[100],
  },
  '& .mapboxgl-popup-tip': {
    border: 0,
  },

  // ! Hide popup on mobile
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledShopName = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  width: '12rem',
  marginBottom: theme.spacing(1),
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
}));

const StyledDescription = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  width: '11rem',
  marginLeft: theme.spacing(0.5),
}));

const StyledPaint = {
  'circle-color': '#4264fb',
  'circle-radius': 6,
  'circle-stroke-width': 1,
  'circle-stroke-color': '#ffffff',
};

const StyledHighlightPaint = {
  'circle-color': '#109d33',
  'circle-radius': 7,
  'circle-stroke-width': 2,
  'circle-stroke-color': '#ffffff',
};

export {
  StyledDescription,
  StyledHighlightPaint,
  StyledPaint,
  StyledPopup,
  StyledShopName,
};
