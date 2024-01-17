import { Box, Typography } from '@mui/material';
import { UseRefinementListProps } from 'react-instantsearch';
import {
  orderTypeLabelMapping,
  otherLabelMapping,
  paymentLabelMapping,
  priceLabelMapping,
} from '../../const/LabelMapping';
import HierarchyFilter from './common/HierarchyFilter';
import SelectionFilter from './common/SelectionFilter';

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

      <Typography variant='h6'>價位</Typography>
      <SelectionFilter
        attribute='priceLevel'
        transformItems={translateItems(priceLabelMapping)}
        filterType='checkBox'
      />

      <Typography variant='h6'>用餐方式</Typography>
      <SelectionFilter
        attribute='orderType'
        transformItems={translateItems(orderTypeLabelMapping)}
        filterType='category'
      />

      <Typography variant='h6'>付款方式</Typography>
      <SelectionFilter
        attribute='paymentType'
        filterType='category'
        transformItems={translateItems(paymentLabelMapping)}
      />

      <Typography variant='h6'>評分</Typography>
      <SelectionFilter
        attribute='ratingStar'
        filterType='checkBox'
      />

      <Typography variant='h6'>其他</Typography>
      <SelectionFilter
        attribute='otherType'
        filterType='checkBox'
        transformItems={translateItems(otherLabelMapping)}
      />
    </Box>
  );
};

export default FilterSection;
