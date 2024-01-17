import { styled } from '@mui/material/styles';
import { Highlight } from 'react-instantsearch';

const StyledShopListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  height: 'calc(100% - 3rem)',
  margin: theme.spacing(3),
  overflow: 'hidden',
  overflowY: 'auto',
}));

const StyledShopList = styled('div')(({ theme }) => ({
  display: 'flex',
  border: '1px solid #ccc',
  marginBottom: theme.spacing(1),
  cursor: 'pointer',
}));

const StyledShopImg = styled('div')(({ theme }) => ({
  width: '8rem',
  height: '7rem',
  margin: theme.spacing(1),
  backgroundColor: '#ccc',
  borderRadius: '5px',
}));

const StyledShop = styled('div')(({ theme }) => ({
  width: '20rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  margin: theme.spacing(1),
}));

const StyledHighlight = styled(Highlight)({
  width: '15rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export {
  StyledHighlight, StyledShop, StyledShopImg, StyledShopList, StyledShopListContainer
};
