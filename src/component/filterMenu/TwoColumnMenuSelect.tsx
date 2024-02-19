import Box from '@mui/material/Box';
import { useRef } from 'react';
import useQueryShopStore from '../../store/useQueryShopStore';
import { StationInfoProps } from '../../types/mrt';
import { SelectKey } from '../../types/queryShop';
import { Option } from '../../types/select';
import {
  StyledMenuItemText,
  StyledRightColumnContainer,
  StyledTwoColumnItem,
  StyledTwoColumnItemButton,
} from './styles/FilterContent.styles';

type Props = {
  leftSelectKey: SelectKey;
  rightSelectKey: SelectKey;
  leftColumnOptions: Option[];
  rightColumnOptions: Record<string, StationInfoProps[]>;
};

const TwoColumnMenuSelect = ({
  leftSelectKey,
  rightSelectKey,
  leftColumnOptions,
  rightColumnOptions,
}: Props) => {
  const leftSelectedItem = useQueryShopStore.use[leftSelectKey]();
  const rightSelectedItem = useQueryShopStore.use[rightSelectKey]();

  const setLeftSelectedItem = useQueryShopStore.use.setSelectValue();
  const setRightSelectedItem = useQueryShopStore.use.setSelectValue();
  const setLocationCenter = useQueryShopStore.use.setLocationCenter();

  const rightColumnRef = useRef<HTMLDivElement>(null);

  const selectLeftColumnItem = (option: string) => {
    setLeftSelectedItem({ selectKey: leftSelectKey, value: option });

    if (rightColumnRef.current) {
      rightColumnRef.current.scrollTop = 0;
    }
  };

  const selectRightColumnItem = (option: StationInfoProps) => {
    setLocationCenter(option.position);
    setRightSelectedItem({ selectKey: rightSelectKey, value: option.name });
  };

  return (
    <Box display='flex'>
      <Box sx={{ backgroundColor: '#f8fafc' }}>
        {leftColumnOptions.map((option) => (
          <Box key={option.id}>
            <StyledTwoColumnItem>
              <StyledTwoColumnItemButton
                selected={option.id === leftSelectedItem}
                onClick={() => {
                  selectLeftColumnItem(option.id);
                }}
              >
                <StyledMenuItemText primary={option.name} />
              </StyledTwoColumnItemButton>
            </StyledTwoColumnItem>
          </Box>
        ))}
      </Box>

      <StyledRightColumnContainer ref={rightColumnRef}>
        {rightColumnOptions[leftSelectedItem].map((option) => (
          <StyledTwoColumnItem key={option.id}>
            <StyledTwoColumnItemButton
              selected={option.name === rightSelectedItem}
              onClick={() => selectRightColumnItem(option)}
            >
              <StyledMenuItemText primary={option.label} />
            </StyledTwoColumnItemButton>
          </StyledTwoColumnItem>
        ))}
      </StyledRightColumnContainer>
    </Box>
  );
};

export default TwoColumnMenuSelect;
