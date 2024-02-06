import { FeatureCollection } from 'geojson';
import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Map, { Layer, MapRef, Source } from 'react-map-gl';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { MapPlaceProperties, Place } from '../../types/place';
import ShopMapInfo from './ShopMapInfo';
import { StyledHighlightPaint, StyledPaint } from './styles/ShopMap.styles';

const accessToken = import.meta.env.VITE_MAP_BOX_TOKEN;

const ShopMap = () => {
  const { data } = useFetchPlaces();

  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();
  const selectedShop = useShopInfoStore.use.selectedShop();
  const hoveredShop = useShopInfoStore.use.hoveredShop();

  const locationCenter = useQueryShopStore.use.locationCenter();

  const mapRef = useRef<MapRef>(null);
  const [cursor, setCursor] = useState<string>('grab');

  const convertToGeoJSON = useCallback((placeListData?: Place[]) => {
    const features =
      placeListData?.map((item) => ({
        type: 'Feature',
        properties: {
          id: item.id,
          displayName: item.displayName,
          address: item.address,
          distance: item.distance,
          rating: item.rating,
          userRatingCount: item.userRatingCount,
          photoNames: item.photoNames,
        },
        geometry: {
          type: 'Point',
          coordinates: [item.longitude, item.latitude],
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
      setShop: (shop: Place | null) => void
    ) => {
      const {
        features,
        lngLat: { lng, lat },
      } = event;
      event.originalEvent.stopPropagation();

      const feature = features && features[0];

      setShop(null);

      if (feature && feature.properties) {
        const {
          id,
          displayName,
          address,
          distance,
          rating,
          userRatingCount,
          photoNames,
        } = feature.properties as MapPlaceProperties;

        setShop({
          id,
          displayName,
          address,
          distance,
          longitude: lng,
          latitude: lat,
          rating,
          userRatingCount,
          photoNames: JSON.parse(photoNames),
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

  // useEffect(() => {
  //   if (!isShopListOpen && mapRef.current) {
  //     mapRef.current.resize();
  //   }
  // }, [isShopListOpen]);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={accessToken}
      initialViewState={{
        longitude: 121.508511,
        latitude: 25.042274,
        zoom: 14,
      }}
      // style={{
      //   width: '600px',
      //   height: '600px',
      // }}
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

      <ShopMapInfo type='selectedShop' />
      {selectedShop?.id !== hoveredShop?.id && (
        <ShopMapInfo type='hoveredShop' />
      )}
    </Map>
  );
};

export default ShopMap;
