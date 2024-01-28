import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledFilterButton = styled(Button)({
  display: 'flex',
  gap: '0.5rem',
  color: '#1d192b',
  backgroundColor: '#e8def8',
  border: '1px solid #e0e0e0',
  borderRight: 'none',
  borderRadius: '0.5rem',

  '&:hover': {
    backgroundColor: '#d1c4e9',
    border: '1px solid #e0e0e0',
    borderRight: 'none',
  },
});

export { StyledFilterButton };
