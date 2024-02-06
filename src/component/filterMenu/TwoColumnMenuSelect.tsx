import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
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
    <Box display='flex' gap={2} mt={1}>
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
                <ListItemText primary={option.name} />
              </StyledMenuItemButton>
            </StyledMenuItem>
          </Box>
        ))}
      </Box>

      <StyledRightColumnContainer>
        {rightColumnOptions[leftSelectedItem].map((option) => (
          <StyledMenuItem key={option.id}>
            <StyledMenuItemButton onClick={() => selectRightColumnItem(option)}>
              <StyledMenuItemText
                isSelected={option.name === rightSelectedItem}
                primary={option.label}
              />
            </StyledMenuItemButton>
          </StyledMenuItem>
        ))}
      </StyledRightColumnContainer>
    </Box>
  );
};

export default TwoColumnMenuSelect;
