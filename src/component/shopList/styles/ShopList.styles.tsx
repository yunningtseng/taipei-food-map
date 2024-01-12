import { Highlight } from 'react-instantsearch';
import { styled } from '@mui/material/styles';

const StyledShopList = styled('div')(({ theme }) => ({
  display: 'flex',
  border: '1px solid #ccc',
  marginBottom: theme.spacing(1),
}));

const StyledShop = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  margin: theme.spacing(1),
}));

const StyledHighlight = styled(Highlight)({
  width: '300px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export { StyledShopList, StyledShop, StyledHighlight };
