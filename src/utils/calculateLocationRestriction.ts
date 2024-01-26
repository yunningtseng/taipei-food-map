import * as turf from '@turf/turf';
import { BBox } from 'geojson';

type Props = {
  center: {
    longitude: number;
    latitude: number;
  };
  distance?: number;
};

export const calculateLocationRestriction = ({
  center,
  distance = 1,
}: Props) => {
  const point = turf.point([center.longitude, center.latitude]);
  const buffered = turf.buffer(point, distance, { units: 'kilometers' });
  const bbox = turf.bbox(buffered) as BBox;

  return {
    rectangle: {
      low: {
        latitude: bbox[1],
        longitude: bbox[0],
      },
      high: {
        latitude: bbox[3],
        longitude: bbox[2],
      },
    },
  };
};
