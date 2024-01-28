import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { useRef, useState } from 'react';
import CategoryFilter from './filter/CategoryFilter';
import CommonFilter from './filter/CommonFilter';
import MRTFilter from './filter/MRTFilter';
import { StyledFilterButton } from './styles/FilterButton.styles';

type FilterSectionProps = {
  type: string;
  title: string;
  options: string[];
};

const FilterSection = ({ type, title, options }: FilterSectionProps) => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
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
      <ButtonGroup ref={anchorRef}>
        <StyledFilterButton onClick={handleClick} size='medium'>
          {selectedTitle ? selectedTitle : title}
          <ArrowDropDownIcon />
        </StyledFilterButton>
      </ButtonGroup>
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
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <>
                  {type === 'category' && (
                    <CategoryFilter
                      options={options}
                      setSelectedTitle={setSelectedTitle}
                      handleClick={handleClick}
                    />
                  )}
                  {type === 'mrt' && (
                    <MRTFilter
                      setSelectedTitle={setSelectedTitle}
                      handleClick={handleClick}
                    />
                  )}
                  {type === 'general' && (
                    <CommonFilter
                      title={title}
                      options={options}
                      setSelectedTitle={setSelectedTitle}
                      handleClick={handleClick}
                    />
                  )}
                </>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default FilterSection;
