import mrtDetail from '../../data/mrtWithRect.json';
import { MrtLines, linePrefixesProps } from '../types/mrt';

export const transformMRTData = () => {
  const mrtData: MrtLines = {
    BL: [],
    R: [],
    BR: [],
    G: [],
    O: [],
    Y: [],
  };

  const linePrefixes: linePrefixesProps = {
    BL: 'BL',
    BR: 'BR',
    R: 'R',
    O: 'O',
    G: 'G',
    Y: 'Y',
  };

  mrtDetail.forEach((item) => {
    const prefix = item.StationID.slice(0, 2);
    const line = linePrefixes[prefix] || linePrefixes[prefix[0]];

    if (line) {
      mrtData[line].push({
        stationID: item.StationID,
        stationName: item.StationName.Zh_tw,
        stationPosition: {
          longitude: item.StationPosition.PositionLon,
          latitude: item.StationPosition.PositionLat,
        },
      });
    }
  });

  return mrtData;
};
