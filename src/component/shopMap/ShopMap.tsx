import Box from '@mui/material/Box';
import { FeatureCollection } from 'geojson';
import mapboxgl from 'mapbox-gl';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useGeoSearch, useInfiniteHits } from 'react-instantsearch';
import Map, { Layer, MapRef, Source } from 'react-map-gl';
import useShopInfoStore from '../../store/useShopInfoStore';
import { PlaceInfo } from '../../types/placeInfo';
import { ShopHit } from '../../types/shop';
import {
  StyledHighlightPaint,
  StyledPaint,
  StyledPopup,
  StyledShopName,
} from './styles/ShopMap.styles';

const accessToken = import.meta.env.VITE_MAP_BOX_TOKEN;

const ShopMap = () => {
  const setSelectedShop = useShopInfoStore((state) => state.setSelectedShop);
  const setHoveredShop = useShopInfoStore((state) => state.setHoveredShop);
  const selectedShop = useShopInfoStore((state) => state.selectedShop);
  const hoveredShop = useShopInfoStore((state) => state.hoveredShop);

  const mapRef = useRef<MapRef>(null);
  const [cursor, setCursor] = useState<string>('grab');

  const { hits } = useInfiniteHits<ShopHit>();
  const { refine } = useGeoSearch();

  const convertToGeoJSON = useCallback((hits: ShopHit[]) => {
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
  }, []);

  const geoJsonData = useMemo(() => convertToGeoJSON(hits), [hits]);

  const handleShopInteraction = (
    event: mapboxgl.MapLayerMouseEvent,
    setShop: (shop: PlaceInfo | null) => void
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
  };

  const handleShopSelection = (event: mapboxgl.MapLayerMouseEvent) => {
    handleShopInteraction(event, setSelectedShop);
  };

  const handleShopHover = (event: mapboxgl.MapLayerMouseEvent) => {
    handleShopInteraction(event, setHoveredShop);
  };

  const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  const onMouseLeave = useCallback(() => setCursor('grab'), []);
  const onDragStart = useCallback(() => setCursor('grabbing'), []);

  const onMoveEnd = useCallback(() => {
    const bounds = mapRef.current!.getBounds();

    refine({
      northEast: bounds.getNorthEast(),
      southWest: bounds.getSouthWest(),
    });
  }, []);

  return (
    <Box mt={4}>
      <Map
        ref={mapRef}
        onMoveEnd={onMoveEnd}
        mapboxAccessToken={accessToken}
        initialViewState={{
          longitude: 121.54378594922848,
          latitude: 25.042074596459575,
          zoom: 13,
        }}
        style={{ width: 'calc(100vw - 53rem)', height: 600 }}
        mapStyle='mapbox://styles/mapbox/outdoors-v11'
        interactiveLayerIds={['places']}
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
