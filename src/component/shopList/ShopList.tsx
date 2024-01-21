import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useRef } from 'react';
import { useInfiniteHits } from 'react-instantsearch';
import { ShopHit } from '../../types/shop';
import SortFilter from './ShopSorter';
import ShopListItem from './ShopListItem';
import { StyledShopListContainer } from './styles/ShopList.styles';

const ShopList = () => {
  const { hits, isLastPage, showMore } = useInfiniteHits<ShopHit>();
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current === null) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLastPage) {
          showMore();
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLastPage, showMore]);

  // FIXME 修正查無商店的顯示方式
  if (hits.length === 0) {
    return <Typography>查無商店!</Typography>;
  }

  return (
    <Box m={3}>
      <SortFilter />

      <StyledShopListContainer>
        <Box minWidth={275} m={1}>
          {hits.map((hit) => (
            <ShopListItem key={hit.objectID} hit={hit} />
          ))}
          <div ref={targetRef} aria-hidden='true' />
          <Typography>資料到底囉！</Typography>
        </Box>
      </StyledShopListContainer>
    </Box>
  );
};

export default ShopList;
