import Box from '@mui/material/Box';
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch';

interface Props {
  attribute: string;
  transformItems?: UseRefinementListProps['transformItems'];
}

const FilterList = ({ attribute, transformItems }: Props) => {
  const { items, refine } = useRefinementList({
    attribute,
    transformItems,
  });

  return (
    <Box>
      {items.map((item) => (
        <div key={item.label}>
          <label>
            <input
              type='checkbox'
              checked={item.isRefined}
              onChange={() => refine(item.value)}
            />
            <span>{item.label}</span>
            <span>({item.count})</span>
          </label>
        </div>
      ))}
    </Box>
  );
};

export default FilterList;
