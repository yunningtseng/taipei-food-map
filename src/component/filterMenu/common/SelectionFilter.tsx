import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemCount,
  StyledListItemIcon,
  StyledListItemText,
} from '../styles/Filter.styles';

type Props = {
  attribute: string;
  transformItems?: UseRefinementListProps['transformItems'];
  filterType?: string;
};

const SelectionFilter = ({ attribute, transformItems, filterType }: Props) => {
  const { items, refine } = useRefinementList({
    attribute,
    transformItems,
  });

  return (
    <>
      {items.map((item) => (
        <StyledListItem key={item.label}>
          <StyledListItemButton
            onClick={() => {
              refine(item.value);
            }}
            dense
          >
            {filterType === 'checkBox' && (
              <StyledListItemIcon>
                <Checkbox edge='start' checked={item.isRefined} disableRipple />
              </StyledListItemIcon>
            )}
            {filterType === 'checkBox' && <ListItemText primary={item.label} />}
            {filterType === 'category' && (
              <StyledListItemText
                primary={item.label}
                isSelected={item.isRefined}
              />
            )}
            <StyledListItemCount
              primary={`(${item.count})`}
            />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </>
  );
};

export default SelectionFilter;
