import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const ShopSorter = () => {
  const options = [
    { label: '評分數', value: 'rating' },
    { label: '評論數', value: 'review' },
  ];
  return (
    <Box display='flex' alignItems='center' gap={1} my={1}>
      <Typography>排序：</Typography>
      {options.map((option) => {
        return <Typography key={option.value}>{option.label}</Typography>;
      })}
    </Box>
  );
};

export default ShopSorter;
