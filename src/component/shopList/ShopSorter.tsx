import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useSortBy } from 'react-instantsearch';

const ShopSorter = () => {
  const { currentRefinement, options, refine } = useSortBy({
    items: [
      { value: 'places', label: '評分數高' },
      { value: 'places_userRatingCount_desc', label: '評論數多' },
    ],
  });

  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Typography>排序：</Typography>
      <Tabs
        value={currentRefinement}
        onChange={(_, newValue) => {
          refine(newValue);
        }}
      >
        {options.map((option) => (
          <Tab
            label={option.label}
            onClick={() => {
              refine(option.value);
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default ShopSorter;
