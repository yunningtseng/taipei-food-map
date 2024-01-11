import { Highlight } from 'react-instantsearch';
import styled from 'styled-components';

const StyledShopList = styled.div({
  display: 'flex',
  border: '1px solid #ccc',
  marginBottom: '0.5rem',
});

const StyledShop = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  margin: '0.5rem',
});

const StyledHighlight = styled(Highlight)({
  width: '300px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export { StyledShopList, StyledShop, StyledHighlight };
