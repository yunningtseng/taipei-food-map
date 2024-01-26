import Box from '@mui/material/Box';
import useQueryShopStore from '../../../store/useQueryShopStore';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
} from '../styles/Filter.styles';

type Props = {
  type: string;
  dataList: string[] | number[];
};

const CategoryFilter = ({ type, dataList }: Props) => {
  const orderType = useQueryShopStore.use.orderType();
  const setOrderType = useQueryShopStore.use.setOrderType();

  const rating = useQueryShopStore.use.rating();
  const setRating = useQueryShopStore.use.setRating();

  const handleClick = (item: string | number) => () => {
    if (type === 'rating') {
      setRating(rating === item ? 0 : (item as number));
    } else if (type === 'order') {
      setOrderType(orderType === item ? '' : (item as string));
    }
  };

  const isSelected = (item: string | number) => {
    if (type === 'rating') {
      return rating === item;
    } else if (type === 'order') {
      return orderType === item;
    }
  };

  return (
    <Box display='flex'>
      {dataList.map((item) => (
        <StyledListItem key={item}>
          <StyledListItemButton onClick={handleClick(item)} dense>
            <StyledListItemText
              primary={item}
              isSelected={isSelected(item) as boolean}
            />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </Box>
  );
};

export default CategoryFilter;
