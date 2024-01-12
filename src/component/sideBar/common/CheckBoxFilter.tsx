import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { UseRefinementListProps, useRefinementList } from 'react-instantsearch';

interface Props {
  attribute: string;
  transformItems?: UseRefinementListProps['transformItems'];
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0, 1, 0.5),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(0.5, 0.5, 0.5, 1),
}));

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: '2rem',
  height: '2rem',
});

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
            <ListItemText primary={`(${item.count})`} />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </>
  );
};

export default CheckBoxFilter;
