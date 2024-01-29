import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import useQueryShopStore from '../../store/useQueryShopStore';
import { SelectKey } from '../../types/queryShop';

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
    <MenuList id='split-button-menu' autoFocusItem>
      {options.map((option) => (
        <MenuItem
          key={option}
          selected={option == selectedItem}
          onClick={() => {
            handleSelectItem(option);
          }}
        >
          {option}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default MenuSelect;
