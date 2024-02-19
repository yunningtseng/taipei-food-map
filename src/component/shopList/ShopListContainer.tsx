import { Box, useMediaQuery, useTheme } from '@mui/material';
import FilterGroups from '../filterMenu/FilterGroups';
import InfoButtonContainer from '../home/InfoButtonContainer';
import {
  StyledDivider,
  StyledHiddenDiv,
  StyledInfoContainer,
  StyledShopListWrapper,
} from '../home/styles/LandingPage.styles';
import ShopList from '../shopList/ShopList';

const ShopListContainer = () => {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box display='flex' flexDirection='column' height='100%'>
      <StyledHiddenDiv />
      <StyledShopListWrapper>
        {!lgDown && <FilterGroups />}
        <StyledInfoContainer>
          <StyledDivider />
          <InfoButtonContainer />
        </StyledInfoContainer>
        <ShopList />
      </StyledShopListWrapper>
    </Box>
  );
};

export default ShopListContainer;
