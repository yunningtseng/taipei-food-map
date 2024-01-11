import { UseRefinementListProps } from 'react-instantsearch';
import { typeLabelMapping, priceLabelMapping } from '../../const/LabelMapping';
import RefinementList from './common/FilterList';

// const transformItems: UseRefinementListProps['transformItems'] = (items) => {
//   return items.map((item) => ({
//     ...item,
//     label: priceLabelMapping[item.label],
//   }));
// };

function translateItems(labelMapping?: {
  [key: string]: string;
}): UseRefinementListProps['transformItems'] {
  return (items) =>
    items.map((item) => ({
      ...item,
      label: labelMapping ? labelMapping[item.label] : item.label,
    }));
}

const FilterSection = () => {
  return (
    <>
      <RefinementList
        attribute='primaryType'
        transformItems={translateItems(typeLabelMapping)}
      />
      <RefinementList
        attribute='priceLevel'
        transformItems={translateItems(priceLabelMapping)}
      />
    </>
  );
};

export default FilterSection;
