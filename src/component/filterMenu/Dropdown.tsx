import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
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

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <FilterButton ref={anchorRef} onClick={handleClick} size='medium'>
        {title}
        <ArrowDropDownIcon />
      </FilterButton>
      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>{children}</Paper>
            </Grow>
          )}
        </Popper>
      </ClickAwayListener>
    </>
  );
};

export default Dropdown;
