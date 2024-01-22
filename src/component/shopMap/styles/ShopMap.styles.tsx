import { styled } from '@mui/material/styles';
import { Popup } from 'react-map-gl';

const StyledPopup = styled(Popup)({
  '& .mapboxgl-popup-tip': {
    border: 0,
  },
});

const StyledShopName = styled('div')({
  width: '10rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
});

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

export { StyledPopup, StyledPaint, StyledShopName, StyledHighlightPaint };
