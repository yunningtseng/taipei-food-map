import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
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
} from '../styles/FilterContent.styles';

const mrtData: MrtData = mrt;

type StationProps = {
  data: StationInfoProps[];
};

type MRTFilterProps = {
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
};

const MRTFilter = ({ setSelectedTitle, handleClick }: MRTFilterProps) => {
  const [selectedLine, setSelectedLine] = useState('BL');
  const [selectedStation, setSelectedStation] = useState('西門');

  const Line = () => {
    return (
      <Box>
        {lineInfo.map((line) => (
          <Box key={line.id}>
            <StyledListItem>
              <StyledListItemButton
                selected={line.id === selectedLine}
                onClick={() => {
                  setSelectedLine(line.id);
                }}
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
                setSelectedTitle(station.stationName);
                handleClick();
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

export default MRTFilter;
