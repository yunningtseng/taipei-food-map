import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FeatureCollection } from 'geojson';
import mapboxgl from 'mapbox-gl';
import { useCallback, useState } from 'react';
import { useInfiniteHits } from 'react-instantsearch';
import Map, { Layer, Popup, Source } from 'react-map-gl';
import styled from 'styled-components';
import usePersonStore from '../../store/shopStore';
import { PlaceInfo } from '../../types/placeInfo';
import { ShopHit } from '../../types/shop';

const accessToken = import.meta.env.VITE_MAP_BOX_TOKEN;

const StyledPopup = styled(Popup)({
  '& .mapboxgl-popup-tip': {
    border: 0,
  },
});

const ShopMap = () => {
  const [popupInfo, setPopupInfo] = useState<PlaceInfo | null>(null);
  const [cursor, setCursor] = useState<string>('grab');

  const { hits } = useInfiniteHits<ShopHit>();

  const convertToGeoJSON = (hits: ShopHit[]) => {
    const features = hits.map((hit) => ({
      type: 'Feature',
      properties: {
        id: hit.id,
        name: hit.displayName.text,
        description: hit.formattedAddress,
      },
      geometry: {
        type: 'Point',
        coordinates: [hit.location.longitude, hit.location.latitude],
      },
    }));

    return {
      type: 'FeatureCollection',
      features: features,
    } as FeatureCollection;
  };

  const geoJsonData = convertToGeoJSON(hits);

  // const pins = useMemo(
  //   () =>
  //     points.map((city, index) => (
  //       <Marker
  //         key={`marker-${index}`}
  //         longitude={city.longitude}
  //         latitude={city.latitude}
  //         anchor='bottom'
  //         onClick={(e) => {
  //           // If we let the click event propagates to the map, it will immediately close the popup
  //           // with `closeOnClick: true`
  //           e.originalEvent.stopPropagation();
  //           setPopupInfo(city);
  //         }}
  //       >
  //         <Pin />
  //       </Marker>
  //     )),
  //   []
  // );

  const onClick = (event: mapboxgl.MapLayerMouseEvent) => {
    const {
      features,
      lngLat: { lng, lat },
    } = event;
    event.originalEvent.stopPropagation();

    const hoveredFeature = features && features[0];

    setPopupInfo(null);

    if (hoveredFeature && hoveredFeature.properties) {
      setPopupInfo({
        id: hoveredFeature.properties.id,
        name: hoveredFeature.properties.name,
        description: hoveredFeature.properties.description,
        longitude: lng,
        latitude: lat,
      });
    }
  };

  const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  const onMouseLeave = useCallback(() => setCursor('grab'), []);
  const onDragStart = useCallback(() => setCursor('grabbing'), []);

  return (
    <Box>
      <Typography>Map</Typography>
      <Map
        mapboxAccessToken={accessToken}
        initialViewState={{
          longitude: 121.50201171117608,
          latitude: 24.992943058604755,
          zoom: 13,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle='mapbox://styles/mapbox/outdoors-v11'
        interactiveLayerIds={['places']}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onDragStart={onDragStart}
        onDragEnd={onMouseLeave}
        cursor={cursor}
      >
        <Source id='places' type='geojson' data={geoJsonData}></Source>
        <Layer
          id='places'
          type='circle'
          source='places'
          paint={{
            'circle-color': '#4264fb',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff',
          }}
        />
        {popupInfo && (
          <StyledPopup
            key={Math.random()}
            closeButton={false}
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            offset={12}
          >
            <div>{popupInfo.name}</div>
            <div>{popupInfo.description}</div>
          </StyledPopup>
        )}
      </Map>
    </Box>
  );
};

export default ShopMap;
