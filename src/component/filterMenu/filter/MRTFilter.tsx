import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import mrt from '../../../../data/mrt.json';
import { lineInfo } from '../../../const/lineInfo';
import useQueryShopStore from '../../../store/useQueryShopStore';
import { MrtData, StationInfoProps } from '../../../types/mrt';
import {
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
  StyledStationContainer,
} from '../styles/MRT.styles';

const mrtData: MrtData = mrt;

type StationProps = {
  data: StationInfoProps[];
};

const MRTFilterSection = () => {
  const [selectedLine, setSelectedLine] = useState('BL');
  const [selectedStation, setSelectedStation] = useState('頂埔');

  const Line = () => {
    const handleClick = (
      _: React.MouseEvent<HTMLDivElement, MouseEvent>,
      line: string
    ) => {
      setSelectedLine(line);
    };

    return (
      <Box>
        {lineInfo.map((line) => (
          <Box key={line.id}>
            <List component='nav'>
              <ListItemButton
                selected={line.id === selectedLine}
                onClick={(event) => handleClick(event, line.id)}
              >
                <ListItemText primary={line.name} />
              </ListItemButton>
            </List>
          </Box>
        ))}
      </Box>
    );
  };

  const Station = ({ data }: StationProps) => {
    const setLocationCenter = useQueryShopStore.use.setLocationCenter();

    return (
      <StyledStationContainer>
        {data.map((station) => (
          <StyledListItem>
            <StyledListItemButton
              onClick={() => {
                setLocationCenter(station.stationPosition);
                setSelectedStation(station.stationName);
              }}
            >
              <StyledListItemText
                isSelected={station.stationName === selectedStation}
                primary={`${station.stationID} ${station.stationName}`}
              />
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </StyledStationContainer>
    );
  };

  return (
    <Box display='flex' gap={2}>
      <Line />
      <Station data={mrtData[selectedLine]} />
    </Box>
  );
};

export default MRTFilterSection;
