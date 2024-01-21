import { styled } from '@mui/material/styles';

const StyledShopListContainer = styled('div')({
  display: 'flex',
  // FIXME 修正高度
  height: 'calc(100% - 3rem)',
  border: '1px solid #ccc',
  overflow: 'hidden',
  overflowY: 'auto',
});

const StyledShopContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(1),
  borderBottom: '1px solid #ccc',
  cursor: 'pointer',
}));

const StyledShopImg = styled('img')(({ theme }) => ({
  width: '9rem',
  height: '8rem',
  margin: theme.spacing(1),
  backgroundColor: '#ccc',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  objectFit: 'cover',
  objectPosition: 'center',
}));

const StyledShop = styled('div')(({ theme }) => ({
  width: '20rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  margin: theme.spacing(1),
}));

const StyledShopName = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export {
  StyledShop,
  StyledShopContainer,
  StyledShopImg,
  StyledShopListContainer,
  StyledShopName,
};
