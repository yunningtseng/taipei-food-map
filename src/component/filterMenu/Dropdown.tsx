import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Popover, Typography } from '@mui/material';
import { ReactNode, useRef, useState } from 'react';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { SelectKey } from '../../types/queryShop';
import FilterButton from './FilterButton';

type Props = {
  selectKey: SelectKey;
  children: ReactNode;
};

const Dropdown = ({ selectKey, children }: Props) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const title = useQueryShopStore.use[selectKey]();
  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    setSelectedShop(null);
    setHoveredShop(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let displayTab;
  if (selectKey === 'minRating') {
    displayTab = `評分${title}${title === '不限' ? '' : '以上'}`;
  } else if (selectKey === 'sortBy') {
    displayTab = `依${title}排序`;
  } else {
    displayTab = title;
  }

  return (
    <>
      <FilterButton ref={anchorRef} onClick={handleClick} size='small'>
        <Typography variant='body2'>{displayTab}</Typography>
        <ArrowDropDownIcon fontSize='small' />
      </FilterButton>
      <Popover
        sx={{
          marginTop: '0.25rem',
        }}
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <>{children}</>
      </Popover>
    </>
  );
};

export default Dropdown;
