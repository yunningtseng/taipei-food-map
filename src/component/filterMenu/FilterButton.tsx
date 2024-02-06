import { Button } from '@mui/material';
import { ComponentProps, forwardRef } from 'react';
import { StyledFilterButton } from './styles/FilterContent.styles';

const FilterButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof Button>
>((props, ref) => {
  return <StyledFilterButton ref={ref} {...props} />;
});

export default FilterButton;
