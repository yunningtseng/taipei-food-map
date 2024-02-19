import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
import {
  StyledSkeleton,
  StyledSkeletonContainer,
} from '../home/styles/LandingPage.styles';

const ShopSkeleton = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [skeletonCount, setSkeletonCount] = useState(0);

  const updateSkeletonCount = () => {
    const screenHeight = window.innerHeight - 8.5 * 16;
    const skeletonHeightPx = 136;
    const count = Math.floor(screenHeight / skeletonHeightPx);
    setSkeletonCount(count);
  };

  useEffect(() => {
    updateSkeletonCount();
    window.addEventListener('resize', updateSkeletonCount);

    return () => {
      window.removeEventListener('resize', updateSkeletonCount);
    };
  }, []);

  const count = lgUp ? skeletonCount : mdUp ? 6 : 3;

  return (
    <StyledSkeletonContainer>
      {Array.from({ length: count }).map((_, index) => (
        <StyledSkeleton key={index}>
          <Skeleton variant='rounded' height='100%' sx={{ minWidth: '8rem' }} />
          <Box width='100%' height='100%'>
            <Skeleton variant='rounded' height='4rem' />
            <Skeleton height='2rem' />
            <Skeleton height='2rem' />
          </Box>
        </StyledSkeleton>
      ))}
    </StyledSkeletonContainer>
  );
};

export default ShopSkeleton;
