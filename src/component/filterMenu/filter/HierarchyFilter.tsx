import useQueryShopStore from '../../../store/useQueryShopStore';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
} from '../styles/Filter.styles';

type Props = {
  dataList: string[];
};

const HierarchyFilter = ({ dataList }: Props) => {
  const textQuery = useQueryShopStore.use.textQuery();
  const setTextQuery = useQueryShopStore.use.setTextQuery();

  const handleClick = (item: string) => () => {
    setTextQuery(textQuery === item ? '' : item);
  };

  return (
    <>
      {dataList.map((item) => (
        <StyledListItem key={item}>
          <StyledListItemButton onClick={handleClick(item)} dense>
            <StyledListItemText
              primary={item}
              isSelected={item === textQuery}
            />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </>
  );
};

export default HierarchyFilter;
