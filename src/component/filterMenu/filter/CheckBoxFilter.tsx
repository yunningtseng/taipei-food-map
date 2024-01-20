import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemCount,
  StyledListItemIcon,
} from '../styles/Filter.styles';

type Props = {
  attribute: string;
  transformItems?: UseRefinementListProps['transformItems'];
};

const CheckBoxFilter = ({ attribute, transformItems }: Props) => {
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
            <StyledListItemIcon>
              <Checkbox edge='start' checked={item.isRefined} disableRipple />
            </StyledListItemIcon>
            <ListItemText primary={item.label} />
            <StyledListItemCount primary={`(${item.count})`} />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </>
  );
};

export default CheckBoxFilter;
