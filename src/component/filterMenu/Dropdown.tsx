import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { ReactNode, useRef, useState } from 'react';
import { dropDownMapping } from '../../const/dropDown';
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

  // FIXME
  const displayTitle = dropDownMapping[selectKey];

  return (
    <>
      <FilterButton ref={anchorRef} onClick={handleClick} size='small'>
        {/* ! TODO */}
        <Typography variant='body2'>{`${title}${displayTitle} `}</Typography>
        <ArrowDropDownIcon fontSize='small' />
      </FilterButton>
      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          transition
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
