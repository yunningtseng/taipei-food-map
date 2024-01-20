import { UseMenuProps, useMenu } from 'react-instantsearch';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemCount,
  StyledListItemText,
} from '../styles/Filter.styles';

type Props = {
  attribute: string;
  transformItems?: UseMenuProps['transformItems'];
};

const CategoryFilter = ({ attribute, transformItems }: Props) => {
  const { items, refine } = useMenu({
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
            <StyledListItemText
              primary={item.label}
              isSelected={item.isRefined}
            />
            <StyledListItemCount primary={`(${item.count})`} />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </>
  );
};

export default CategoryFilter;
