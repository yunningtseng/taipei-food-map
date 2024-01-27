import Box from '@mui/material/Box';
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
            <StyledListItem>
              <StyledListItemButton
                selected={line.id === selectedLine}
                onClick={(event) => handleClick(event, line.id)}
              >
                <ListItemText primary={line.name} />
              </StyledListItemButton>
            </StyledListItem>
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
          <StyledListItem key={station.stationID}>
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
    <Box display='flex' gap={2} mt={1}>
      <Line />
      <Station data={mrtData[selectedLine]} />
    </Box>
  );
};

export default MRTFilterSection;
