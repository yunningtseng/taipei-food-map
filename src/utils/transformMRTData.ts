import mrtGeo from '../../data/mrtGeo.json';
import rowMrtDetail from '../../data/rowMrtDetail.json';
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

  rowMrtDetail.forEach((item) => {
    const prefix = item.StationID.slice(0, 2) as LinePrefixKey;
    const line =
      linePrefixes[prefix] || linePrefixes[prefix[0] as keyof LinePrefixes];

    if (line) {
      const feature = mrtGeo.features.find(
        (feature) => feature.properties.station === item.StationName.Zh_tw
      );

      if (feature) {
        mrtData[line].push({
          id: item.StationID,
          name: item.StationName.Zh_tw,
          label: `${item.StationID} (${item.StationName.Zh_tw})`,
          position: {
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1],
          },
        });
      }
    }
  });

  return mrtData;
};
