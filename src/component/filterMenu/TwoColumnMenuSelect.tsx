import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import useQueryShopStore from '../../store/useQueryShopStore';
import { StationInfoProps } from '../../types/mrt';
import { SelectKey } from '../../types/queryShop';
import { Option } from '../../types/select';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
  StyledStationContainer,
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
            <StyledListItem>
              <StyledListItemButton
                selected={option.id === leftSelectedItem}
                onClick={() => {
                  selectLeftColumnItem(option.id);
                }}
              >
                <ListItemText primary={option.name} />
              </StyledListItemButton>
            </StyledListItem>
          </Box>
        ))}
      </Box>

      <StyledStationContainer>
        {rightColumnOptions[leftSelectedItem].map((option) => (
          <StyledListItem key={option.id}>
            <StyledListItemButton onClick={() => selectRightColumnItem(option)}>
              <StyledListItemText
                isSelected={option.name === rightSelectedItem}
                primary={option.label}
              />
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </StyledStationContainer>
    </Box>
  );
};

export default TwoColumnMenuSelect;
