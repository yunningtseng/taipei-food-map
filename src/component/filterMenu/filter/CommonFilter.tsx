import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useState } from 'react';
import useQueryShopStore from '../../../store/useQueryShopStore';

type CommonFilterProps = {
  title: string;
  options: string[];
  // ? check
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
};

const CommonFilter = ({
  title,
  options,
  setSelectedTitle,
  handleClick,
}: CommonFilterProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | ''>('');
  const setRating = useQueryShopStore.use.setRating();

  const filterRating = (option: string | number) => {
    if (option === '不限') {
      setRating(1);
      return;
    }
    setRating(option as number);
  };

  const handleMenuItemClick = (index: number, option: string | number) => {
    setSelectedIndex(index);
    setSelectedTitle(options[index]);
    handleClick();
    if (title === '評分') {
      filterRating(option);
    }
  };

  return (
    <MenuList id='split-button-menu' autoFocusItem>
      {options.map((option, index) => (
        <MenuItem
          key={option}
          selected={index === selectedIndex}
          onClick={() => {
            handleMenuItemClick(index, option);
          }}
        >
          {option}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default CommonFilter;
