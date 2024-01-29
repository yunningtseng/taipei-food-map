import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import StraightenIcon from '@mui/icons-material/Straighten';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FeatureCollection } from 'geojson';
import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Map, { Layer, MapRef, Source } from 'react-map-gl';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { MapPlace, Place } from '../../types/place';
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

  const locationCenter = useQueryShopStore.use.locationCenter();
  const station = useQueryShopStore.use.station();

  const mapRef = useRef<MapRef>(null);
  const [cursor, setCursor] = useState<string>('grab');

  const convertToGeoJSON = useCallback((placeListData?: Place[]) => {
    const features =
      placeListData?.map((item) => ({
        type: 'Feature',
        properties: {
          id: item.id,
          name: item.displayName,
          address: item.formattedAddress,
          distance: item.distance,
          rating: item.rating,
          userRatingCount: item.userRatingCount,
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
      setShop: (shop: MapPlace | null) => void
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
          address: feature.properties.address,
          distance: feature.properties.distance,
          longitude: lng,
          latitude: lat,
          rating: feature.properties.rating,
          userRatingCount: feature.properties.userRatingCount,
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

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [locationCenter.longitude, locationCenter.latitude],
    });
  }, [locationCenter]);

  const MapShop = ({
    name,
    address,
    distance,
    rating,
    userRatingCount,
    longitude,
    latitude,
  }: MapPlace) => {
    return (
      <StyledPopup
        key={Math.random()}
        closeButton={false}
        longitude={longitude}
        latitude={latitude}
        offset={12}
      >
        <StyledShopName>{name}</StyledShopName>

        <Box display='flex'>
          <StarIcon fontSize='small' />
          <Typography
            variant='body2'
            ml={0.5}
          >{`${rating} (${userRatingCount})`}</Typography>
        </Box>

        <Box display='flex' alignItems='center' mt={1}>
          <LocationOnIcon fontSize='small' />
          <Typography variant='body2' ml={0.5}>
            {address}
          </Typography>
        </Box>

        <Box display='flex' alignItems='center' mt={1}>
          <StraightenIcon fontSize='small' />
          <Typography variant='body2' ml={0.5}>
            距離{station}捷運站 {distance} 公尺
          </Typography>
        </Box>
      </StyledPopup>
    );
  };

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={accessToken}
      initialViewState={{
        longitude: 121.508511,
        latitude: 25.042274,
        zoom: 13,
      }}
      // FIXME
      style={{ width: '100%', height: '67rem' }}
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
        <MapShop
          name={selectedShop.name}
          address={selectedShop.address}
          distance={selectedShop.distance}
          rating={selectedShop.rating}
          longitude={selectedShop.longitude}
          latitude={selectedShop.latitude}
          userRatingCount={selectedShop.userRatingCount}
        />
      )}

      {selectedShop?.id !== hoveredShop?.id && hoveredShop && (
        <MapShop
          name={hoveredShop.name}
          address={hoveredShop.address}
          distance={hoveredShop.distance}
          rating={hoveredShop.rating}
          longitude={hoveredShop.longitude}
          latitude={hoveredShop.latitude}
          userRatingCount={hoveredShop.userRatingCount}
        />
      )}
    </Map>
  );
};

export default ShopMap;
