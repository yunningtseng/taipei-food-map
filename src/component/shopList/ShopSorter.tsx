import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

// TODO
const ShopSorter = () => {
  const options = [
    { label: '評分數', value: 'rating' },
    { label: '評論數', value: 'review' },
  ];
  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Typography>排序：</Typography>
      <Tabs
        // value={}
        onChange={() => {}}
      >
        {options.map((option) => (
          <Tab label={option.label} onClick={() => {}} />
        ))}
      </Tabs>
    </Box>
  );
};

export default ShopSorter;
