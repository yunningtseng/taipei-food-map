import mrt from '../../data/rawMrt.json';
import stations from '../../data/rowMrtDetail.json';

export const transformMRTGeoData = () => {
  const uniqueLocations = [];
  const seenCoordinates = {};

  mrt.forEach((location) => {
    const { latitude, longitude } = location.location;
    const coordinateKey = `${latitude}-${longitude}`;

    if (!seenCoordinates[coordinateKey]) {
      uniqueLocations.push(location);
      seenCoordinates[coordinateKey] = true;
    }
  });

  const validStationNames = new Set(
    stations.map((station) => station.StationName.Zh_tw)
  );

  const filteredLocations = uniqueLocations.filter((location) =>
    validStationNames.has(location.displayName.text)
  );

  const mrtData = {
    type: 'FeatureCollection',
    features: [],
  };

  filteredLocations.map((item) => {
    const feature = {
      type: 'Feature',
      properties: {
        station: item.displayName.text,
        type: 'mrt',
      },
      geometry: {
        type: 'Point',
        coordinates: [item.location.longitude, item.location.latitude],
      },
    };

    mrtData.features.push(feature);
  });

  return mrtData;
};
