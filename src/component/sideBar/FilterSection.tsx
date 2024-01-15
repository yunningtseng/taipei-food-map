import { Box, Typography } from '@mui/material';
import { UseRefinementListProps } from 'react-instantsearch';
import {
  orderTypeLabelMapping,
  priceLabelMapping,
  typeLabelMapping,
} from '../../const/LabelMapping';
import CategoryFilter from './common/CategoryFilter';
import CheckBoxFilter from './common/CheckBoxFilter';

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
    <Box m={3}>
      <Typography variant='h6'>種類</Typography>
      <CheckBoxFilter
        attribute='primaryType'
        transformItems={translateItems(typeLabelMapping)}
      />

      <Typography variant='h6'>價位</Typography>
      <CheckBoxFilter
        attribute='priceLevel'
        transformItems={translateItems(priceLabelMapping)}
      />

      <Typography variant='h6'>用餐方式</Typography>
      <CategoryFilter
        attribute='orderType'
        transformItems={translateItems(orderTypeLabelMapping)}
      />

      <Typography variant='h6'>付款方式</Typography>
      <CategoryFilter
        attribute='paymentType'
        // transformItems={translateItems(orderTypeLabelMapping)}
      />

      <Typography variant='h6'>評分</Typography>
      <CheckBoxFilter
        attribute='rating'
        // transformItems={translateItems(orderTypeLabelMapping)}
      />

      <Typography variant='h6'>其他</Typography>
      <CheckBoxFilter
        attribute='otherType'
        // transformItems={translateItems(orderTypeLabelMapping)}
      />
    </Box>
  );
};

export default FilterSection;
