import { Box, Typography } from '@mui/material';
import { UseRefinementListProps } from 'react-instantsearch';
import { orderTypeLabelMapping } from '../../const/LabelMapping';
import HierarchyFilter from './HierarchyFilter';
import SelectionFilter from './SelectionFilter';

function translateItems(labelMapping?: {
  [key: string]: string;
}): UseRefinementListProps['transformItems'] {
  return (items) =>
    items.map((item) => ({
      ...item,
      label: labelMapping ? labelMapping[item.label] : item.label,
    }));
}

// function translateItems2(labelMapping?: {
//   [key: string]: string;
// }): UseRefinementListProps['transformItems'] {
//   return (items) =>
//     items
//       .filter((item) => item.value === 'true')
//       .map((item) => ({
//         ...item,
//         label: labelMapping ? labelMapping[item.label] : item.label,
//       }));
// }

const FilterSection = () => {
  return (
    <Box width={200} m={3}>
      <Typography variant='h6'>種類</Typography>
      <HierarchyFilter attributes={['lv1', 'lv2']} />

      <Typography variant='h6'>用餐方式</Typography>
      <SelectionFilter
        attribute='orderType'
        transformItems={translateItems(orderTypeLabelMapping)}
        filterType='category'
      />

      <Typography variant='h6'>評分</Typography>
      <SelectionFilter attribute='ratingStar' filterType='checkBox' />
    </Box>
  );
};

export default FilterSection;
