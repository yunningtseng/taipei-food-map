import useQueryShopStore from '../../store/useQueryShopStore';
import { SelectKey } from '../../types/queryShop';
import {
  StyledTabsMenuList,
  StyledTabsMenuSelect,
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
    <StyledTabsMenuList id='split-button-menu'>
      {options.map((option) => (
        <StyledTabsMenuSelect
          key={option}
          selected={option == selectedItem}
          onClick={() => {
            handleSelectItem(option);
          }}
        >
          {option}
        </StyledTabsMenuSelect>
      ))}
    </StyledTabsMenuList>
  );
};

export default MenuSelect;
