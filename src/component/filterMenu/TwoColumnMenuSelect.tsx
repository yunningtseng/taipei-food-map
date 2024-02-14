import Box from '@mui/material/Box';
import useQueryShopStore from '../../store/useQueryShopStore';
import { StationInfoProps } from '../../types/mrt';
import { SelectKey } from '../../types/queryShop';
import { Option } from '../../types/select';
import {
  StyledMenuItem,
  StyledMenuItemButton,
  StyledMenuItemText,
  StyledRightColumnContainer,
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

  const selectLeftColumnItem = (option: string) => {
    setLeftSelectedItem({ selectKey: leftSelectKey, value: option });
  };

  const selectRightColumnItem = (option: StationInfoProps) => {
    setLocationCenter(option.position);
    setRightSelectedItem({ selectKey: rightSelectKey, value: option.name });
  };

  return (
    <Box display='flex'>
      <Box>
        {leftColumnOptions.map((option) => (
          <Box key={option.id}>
            <StyledMenuItem>
              <StyledMenuItemButton
                selected={option.id === leftSelectedItem}
                onClick={() => {
                  selectLeftColumnItem(option.id);
                }}
              >
                <StyledMenuItemText primary={option.name} />
              </StyledMenuItemButton>
            </StyledMenuItem>
          </Box>
        ))}
      </Box>

      <StyledRightColumnContainer>
        {rightColumnOptions[leftSelectedItem].map((option) => (
          <StyledMenuItem key={option.id}>
            <StyledMenuItemButton
              selected={option.name === rightSelectedItem}
              onClick={() => selectRightColumnItem(option)}
            >
              <StyledMenuItemText primary={option.label} />
            </StyledMenuItemButton>
          </StyledMenuItem>
        ))}
      </StyledRightColumnContainer>
    </Box>
  );
};

export default TwoColumnMenuSelect;
