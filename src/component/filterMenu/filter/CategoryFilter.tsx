import Box from '@mui/material/Box';
import useQueryShopStore from '../../../store/useQueryShopStore';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
} from '../styles/FilterContent.styles';

type CategoryFilterProps = {
  options: string[];
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
};

const CategoryFilter = ({
  options,
  setSelectedTitle,
  handleClick,
}: CategoryFilterProps) => {
  const textQuery = useQueryShopStore.use.textQuery();
  const setTextQuery = useQueryShopStore.use.setTextQuery();

  return (
    <Box width={100}>
      {options.map((item) => (
        <StyledListItem key={item}>
          <StyledListItemButton
            onClick={() => {
              setSelectedTitle(item);
              setTextQuery(item);
              handleClick();
            }}
            dense
          >
            <StyledListItemText
              primary={item}
              isSelected={item === textQuery}
            />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </Box>
  );
};

export default CategoryFilter;
