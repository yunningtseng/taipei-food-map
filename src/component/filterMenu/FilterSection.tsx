import { Box, Typography } from '@mui/material';
import CategoryFilter from './filter/CategoryFilter';
import HierarchyFilter from './filter/HierarchyFilter';
import MRTFilterSection from './filter/MRTFilter';

const FilterSection = () => {
  return (
    <Box width={300} ml={3} mt={5}>
      <Typography variant='h6'>種類</Typography>
      <HierarchyFilter
        dataList={[
          '蛋糕',
          '豆花',
          '冰品飲料',
          '冰淇淋',
          '麵包',
          '餅乾',
          '巧克力',
        ]}
      />

      <Typography variant='h6' mt={2}>
        用餐方式
      </Typography>
      <CategoryFilter type='order' dataList={['內用', '外帶', '外送']} />

      <Typography variant='h6' mt={2}>
        評分
      </Typography>
      <CategoryFilter type='rating' dataList={['5', '4', '3', '2', '1']} />

      <Typography variant='h6' mt={2}>
        捷運站
      </Typography>
      <MRTFilterSection />
    </Box>
  );
};

export default FilterSection;
