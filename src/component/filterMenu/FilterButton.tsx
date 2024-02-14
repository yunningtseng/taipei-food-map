import { Button } from '@mui/material';
import { ComponentProps, forwardRef } from 'react';
import { StyledTabButton } from './styles/FilterContent.styles';

const FilterButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof Button>
>((props, ref) => {
  return <StyledTabButton ref={ref} {...props} />;
});

export default FilterButton;
