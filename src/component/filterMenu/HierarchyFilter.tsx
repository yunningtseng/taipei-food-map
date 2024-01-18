import { Box, ListItemText } from '@mui/material';
import { useHierarchicalMenu } from 'react-instantsearch';
import { HierarchicalListProps } from '../../types/hierarchy';
import {
  StyledHierarchyListItem,
  StyledListItemCount,
} from './styles/Filter.styles';

type Props = {
  attributes: string[];
};

const HierarchicalList = ({
  items,
  createURL,
  onNavigate,
  isTop,
}: HierarchicalListProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((item) => (
        <Box key={item.value}>
          <StyledHierarchyListItem
            onClick={(event) => {
              createURL(item.value);
              event.preventDefault();
              onNavigate(item.value);
            }}
            isTop={isTop}
            isSelected={item.isRefined}
          >
            <ListItemText>{item.label}</ListItemText>
            <StyledListItemCount>{`(${item.count})`}</StyledListItemCount>
          </StyledHierarchyListItem>
          {item.data && (
            <HierarchicalList
              items={item.data}
              onNavigate={onNavigate}
              createURL={createURL}
              isTop={false}
            />
          )}
        </Box>
      ))}
    </>
  );
};

const HierarchyFilter = ({ attributes }: Props) => {
  const { items, refine, createURL } = useHierarchicalMenu({
    attributes,
  });

  return (
    <HierarchicalList
      items={items}
      onNavigate={refine}
      createURL={createURL}
      isTop
    />
  );
};

export default HierarchyFilter;
