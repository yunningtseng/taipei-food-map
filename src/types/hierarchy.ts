import { useHierarchicalMenu } from 'react-instantsearch';
import { ListItemProps } from '@mui/material/ListItem';

export type HierarchicalListItemProps = ListItemProps & {
  isTop: boolean;
  isSelected: boolean;
};

export type SimpleHierarchicalProps = Pick<
  ReturnType<typeof useHierarchicalMenu>,
  'items' | 'createURL'
> & {
  onNavigate(value: string): void;
};

export type HierarchicalItemProps = {
  isTop: boolean;
};

export type HierarchicalListProps = SimpleHierarchicalProps &
  HierarchicalItemProps;
