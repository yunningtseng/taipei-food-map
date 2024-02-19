import useQueryShopStore from '../../store/useQueryShopStore';
import { SelectKey } from '../../types/queryShop';
import {
  StyledMenuList,
  StyledMenuSelect,
} from './styles/FilterContent.styles';

type Props = {
  selectKey: SelectKey;
  options: string[];
};

const MenuSelect = ({ selectKey, options }: Props) => {
  const selectedItem = useQueryShopStore.use[selectKey]();
  const setSelectedItem = useQueryShopStore.use.setSelectValue();

  const handleSelectItem = (value: string) => {
    setSelectedItem({ selectKey, value });
  };

  return (
    <StyledMenuList id='split-button-menu'>
      {options.map((option) => (
        <StyledMenuSelect
          key={option}
          selected={option == selectedItem}
          onClick={() => {
            handleSelectItem(option);
          }}
        >
          {option}
        </StyledMenuSelect>
      ))}
    </StyledMenuList>
  );
};

export default MenuSelect;
