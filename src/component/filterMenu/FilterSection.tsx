import { Box, Typography } from '@mui/material';
import { UseRefinementListProps } from 'react-instantsearch';
import { orderTypeLabelMapping } from '../../const/LabelMapping';
import CategoryFilter from './filter/CategoryFilter';
import CheckBoxFilter from './filter/CheckBoxFilter';
import HierarchyFilter from './filter/HierarchyFilter';

const translateItems = (labelMapping?: {
  [key: string]: string;
}): UseRefinementListProps['transformItems'] => {
  return (items) =>
    items.map((item) => ({
      ...item,
      label: labelMapping ? labelMapping[item.label] : item.label,
    }));
};

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
      <HierarchyFilter attributes={['hierarchyLv1', 'hierarchyLv2']} />

      <Typography variant='h6'>用餐方式</Typography>
      <CategoryFilter
        attribute='orderType'
        transformItems={translateItems(orderTypeLabelMapping)}
      />

      <Typography variant='h6'>評分</Typography>
      <CheckBoxFilter attribute='ratingStar' />
    </Box>
  );
};

export default FilterSection;
