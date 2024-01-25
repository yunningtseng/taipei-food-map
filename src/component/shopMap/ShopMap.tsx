import Box from '@mui/material/Box';
import { FeatureCollection } from 'geojson';
import mapboxgl from 'mapbox-gl';
import { useCallback, useMemo, useRef, useState } from 'react';
import Map, { Layer, MapRef, Source } from 'react-map-gl';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import useShopInfoStore from '../../store/useShopInfoStore';
import { Place } from '../../types/place';
import { MapPlaceInfo } from '../../types/mapPlaceInfo';
import {
  StyledHighlightPaint,
  StyledPaint,
  StyledPopup,
  StyledShopName,
} from './styles/ShopMap.styles';

const accessToken = import.meta.env.VITE_MAP_BOX_TOKEN;

const ShopMap = () => {
  const { data } = useFetchPlaces();

  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();
  const selectedShop = useShopInfoStore.use.selectedShop();
  const hoveredShop = useShopInfoStore.use.hoveredShop();

  const mapRef = useRef<MapRef>(null);
  const [cursor, setCursor] = useState<string>('grab');

  const convertToGeoJSON = useCallback((placeListData?: Place[]) => {
    const features =
      placeListData?.map((item) => ({
        type: 'Feature',
        properties: {
          id: item.id,
          name: item.displayName,
          description: item.formattedAddress,
        },
        geometry: {
          type: 'Point',
          coordinates: [item.location.longitude, item.location.latitude],
        },
      })) ?? [];

    return {
      type: 'FeatureCollection',
      features: features,
    } as FeatureCollection;
  }, []);

  const geoJsonData = useMemo(() => convertToGeoJSON(data), [data]);

  const handleShopInteraction = useCallback(
    (
      event: mapboxgl.MapLayerMouseEvent,
      setShop: (shop: MapPlaceInfo | null) => void
    ) => {
      const {
        features,
        lngLat: { lng, lat },
      } = event;
      event.originalEvent.stopPropagation();

      const feature = features && features[0];
      setShop(null);

      if (feature && feature.properties) {
        setShop({
          id: feature.properties.id,
          name: feature.properties.name,
          description: feature.properties.description,
          longitude: lng,
          latitude: lat,
        });
      }
    },
    []
  );

  const handleShopSelection = (event: mapboxgl.MapLayerMouseEvent) => {
    handleShopInteraction(event, setSelectedShop);
  };

  const handleShopHover = (event: mapboxgl.MapLayerMouseEvent) => {
    handleShopInteraction(event, setHoveredShop);
  };

  const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  const onMouseLeave = useCallback(() => setCursor('grab'), []);
  const onDragStart = useCallback(() => setCursor('grabbing'), []);

  // TODO
  const onMoveEnd = useCallback(() => {
    // const bounds = mapRef.current!.getBounds();
    // refine({
    //   northEast: bounds.getNorthEast(),
    //   southWest: bounds.getSouthWest(),
    // });
  }, []);

  return (
    <Box mt={4}>
      <Map
        ref={mapRef}
        mapboxAccessToken={accessToken}
        initialViewState={{
          longitude: 121.508511,
          latitude: 25.042274,
          zoom: 13,
        }}
        style={{ width: 'calc(100vw - 53rem)', height: 600 }}
        mapStyle='mapbox://styles/mapbox/outdoors-v11'
        interactiveLayerIds={['places']}
        onMoveEnd={onMoveEnd}
        onClick={handleShopSelection}
        onMouseMove={handleShopHover}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onDragStart={onDragStart}
        onDragEnd={onMouseLeave}
        cursor={cursor}
      >
        <Source id='places' type='geojson' data={geoJsonData}></Source>
        <Layer id='places' source='places' type='circle' paint={StyledPaint} />
        <Layer
          id='places-highlighted'
          source='places'
          type='circle'
          paint={StyledHighlightPaint}
          filter={[
            'any',
            ['==', ['get', 'id'], selectedShop?.id ?? ''],
            ['==', ['get', 'id'], hoveredShop?.id ?? ''],
          ]}
        />

        {selectedShop && (
          <StyledPopup
            key={Math.random()}
            closeButton={false}
            longitude={selectedShop.longitude}
            latitude={selectedShop.latitude}
            offset={12}
          >
            <StyledShopName>{selectedShop.name}</StyledShopName>
            <div>{selectedShop.description}</div>
          </StyledPopup>
        )}

        {selectedShop?.id !== hoveredShop?.id && hoveredShop && (
          <StyledPopup
            key={Math.random()}
            closeButton={false}
            longitude={hoveredShop.longitude}
            latitude={hoveredShop.latitude}
            offset={12}
          >
            <StyledShopName>{hoveredShop.name}</StyledShopName>
            <div>{hoveredShop.description}</div>
          </StyledPopup>
        )}
      </Map>
    </Box>
  );
};

export default ShopMap;
