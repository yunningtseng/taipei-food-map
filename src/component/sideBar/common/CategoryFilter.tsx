import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UseMenuProps, useMenu } from 'react-instantsearch';

interface Props {
  attribute: string;
  transformItems?: UseMenuProps['transformItems'];
}

interface ListItemTextProps {
  isSelected: boolean;
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0, 1, 0.5),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(0.5, 0.5, 0.5, 1),
}));

const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<ListItemTextProps>(({ theme, isSelected }) => ({
  ...(isSelected && {
    '& .MuiTypography-root': {
      ...theme.typography.button,
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
}));

function CategoryFilter({ attribute, transformItems }: Props) {
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
            <ListItemText primary={`(${item.count})`} />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </>
  );
}

export default CategoryFilter;
