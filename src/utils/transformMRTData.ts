import mrtDetail from '../../data/mrtWithRect.json';
import { MrtData } from '../types/mrt';

type LinePrefixKey = 'BL' | 'BR' | 'R' | 'O' | 'G' | 'Y';

type LinePrefixes = {
  [key in LinePrefixKey]: string;
};

export const transformMRTData = () => {
  const mrtData: MrtData = {
    BL: [],
    R: [],
    BR: [],
    G: [],
    O: [],
    Y: [],
  };

  const linePrefixes: LinePrefixes = {
    BL: 'BL',
    BR: 'BR',
    R: 'R',
    O: 'O',
    G: 'G',
    Y: 'Y',
  };

  mrtDetail.forEach((item) => {
    const prefix = item.StationID.slice(0, 2) as LinePrefixKey;
    // FIXME
    const line = linePrefixes[prefix] || linePrefixes[prefix[0]];

    if (line) {
      mrtData[line].push({
        id: item.StationID,
        name: item.StationName.Zh_tw,
        label: `${item.StationID} (${item.StationName.Zh_tw})`,
        position: {
          longitude: item.StationPosition.PositionLon,
          latitude: item.StationPosition.PositionLat,
        },
      });
    }
  });

  return mrtData;
};
