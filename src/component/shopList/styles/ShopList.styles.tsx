import { styled } from '@mui/material/styles';

const StyledShopListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  height: 'calc(100% - 3rem)',
  margin: theme.spacing(3),
  border: '1px solid #ccc',
  overflow: 'hidden',
  overflowY: 'auto',
}));

const StyledShopList = styled('div')(({ theme }) => ({
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
  width: '15rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export {
  StyledShop,
  StyledShopImg,
  StyledShopList,
  StyledShopListContainer,
  StyledShopName,
};
