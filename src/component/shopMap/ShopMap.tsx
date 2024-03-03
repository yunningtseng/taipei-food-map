import { FeatureCollection } from 'geojson';
import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Map, { Layer, MapEvent, MapRef, Source } from 'react-map-gl';
import mrtGeoData from '../../../data/mrtGeo.json';
import { useFetchPlaces } from '../../hooks/useFetchPlaces';
import useShopInfoStore from '../../store/useGetShopInfoStore';
import useCardOpenStore from '../../store/useListOpenStore';
import useQueryShopStore from '../../store/useQueryShopStore';
import { MapPlaceProperties, Place } from '../../types/place';
import ShopMapInfo from './ShopMapInfo';

const accessToken = import.meta.env.VITE_MAP_BOX_TOKEN;

const ShopMap = () => {
  const { data } = useFetchPlaces();

  const setSelectedShop = useShopInfoStore.use.setSelectedShop();
  const setHoveredShop = useShopInfoStore.use.setHoveredShop();
  const selectedShop = useShopInfoStore.use.selectedShop();
  const hoveredShop = useShopInfoStore.use.hoveredShop();

  const setRightSelectedItem = useQueryShopStore.use.setSelectValue();
  const setLocationCenter = useQueryShopStore.use.setLocationCenter();

  const locationCenter = useQueryShopStore.use.locationCenter();
  const setCardOpen = useCardOpenStore.use.setCardOpen();

  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        mapRef.current?.resize();
      }, 0);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [locationCenter.longitude, locationCenter.latitude],
    });
  }, [locationCenter]);

  const onLoad = (e: MapEvent) => {
    const map = e.target;

    map.getStyle().layers.forEach((layer: mapboxgl.Layer) => {
      if (layer.id.endsWith('-label')) {
        map.setLayoutProperty(layer.id, 'text-field', [
          'coalesce',
          ['get', 'name_zh-Hant'],
          ['get', 'name'],
        ]);
      }
    });

    map.loadImage('/images/placeBlue.png', (_, image) => {
      if (image) {
        map.addImage('placeBlue', image);
      }
    });

    map.loadImage('/images/placeRed.png', (_, image) => {
      if (image) {
        map.addImage('placeRed', image);
      }
    });

    map.loadImage('/images/mrt.png', (_, image) => {
      if (image) {
        map.addImage('mrt', image);
      }
    });
  };

  const [cursor, setCursor] = useState<string>('grab');

  const convertToGeoJSON = useCallback((data?: Place[]) => {
    const features =
      data?.map((item) => ({
        type: 'Feature',
        properties: {
          id: item.id,
          name: item.name,
          address: item.address,
          distance: item.distance,
          rating: item.rating,
          userRatingCount: item.userRatingCount,
          photoNames: item.photoNames,
          type: 'place',
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
      setShop: (shop: Place | null) => void,
      interactionType: string
    ) => {
      const {
        features,
        lngLat: { lng, lat },
      } = event;
      event.originalEvent.stopPropagation();

      const feature = features && features[0];

      if (feature?.properties?.type === 'mrt' && interactionType === 'click') {
        setShop(null);
        setLocationCenter({ longitude: lng, latitude: lat });
        setRightSelectedItem({
          selectKey: 'station',
          value: feature.properties.station,
        });
      } else if (feature?.properties?.type === 'place') {
        if (feature && feature.properties) {
          setShop(null);

          const {
            id,
            name,
            address,
            distance,
            rating,
            userRatingCount,
            photoNames,
          } = feature.properties as MapPlaceProperties;

          setShop({
            id,
            name,
            address,
            distance,
            longitude: lng,
            latitude: lat,
            rating,
            userRatingCount,
            photoNames: JSON.parse(photoNames),
          });
        }
      } else {
        setShop(null);
      }
    },
    []
  );

  const handleShopSelection = (event: mapboxgl.MapLayerMouseEvent) => {
    handleShopInteraction(event, setSelectedShop, 'click');
    setCardOpen(true);
  };

  const handleShopHover = (event: mapboxgl.MapLayerMouseEvent) => {
    handleShopInteraction(event, setHoveredShop, 'hover');
  };

  const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  const onMouseLeave = useCallback(() => setCursor('grab'), []);
  const onDragStart = useCallback(() => setCursor('grabbing'), []);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={accessToken}
      initialViewState={{
        longitude: 121.51753000000001,
        latitude: 25.04625,
        zoom: 14,
      }}
      maxZoom={17}
      minZoom={11}
      onLoad={onLoad}
      mapStyle='mapbox://styles/yunningtseng/clsipyzc400ks01r6cfhicwmh'
      interactiveLayerIds={['places', 'mrt']}
      onClick={handleShopSelection}
      onMouseMove={handleShopHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDragStart={onDragStart}
      onDragEnd={onMouseLeave}
      cursor={cursor}
    >
      <Source id='places' type='geojson' data={geoJsonData}></Source>
      <Source
        id='mrt-text'
        type='geojson'
        data={mrtGeoData as FeatureCollection}
      ></Source>
      <Layer
        id='place-text'
        source='places'
        type='symbol'
        layout={{
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 1.4,
          'text-field': ['get', 'name'],
          'text-size': 13,
          'text-justify': 'auto',
          'text-padding': 0,
        }}
        paint={{
          'text-color': '#07435d',
          'text-halo-blur': 1,
          'text-halo-width': 1,
          'text-halo-color': '#fff',
        }}
      />
      <Layer
        id='places'
        source='places'
        type='symbol'
        layout={{
          'icon-image': 'placeBlue',
          'icon-allow-overlap': true,
          'icon-size': 0.5,
          'icon-padding': 0,
        }}
      />
      <Layer
        id='places-highlighted'
        source='places'
        type='symbol'
        layout={{
          'icon-image': 'placeRed',
          'icon-allow-overlap': true,
          'icon-size': 0.5,
          'icon-padding': 0,
        }}
        filter={[
          'any',
          ['==', ['get', 'id'], selectedShop?.id ?? ''],
          ['==', ['get', 'id'], hoveredShop?.id ?? ''],
        ]}
      />
      <Layer
        id='mrt'
        source='mrt-text'
        type='symbol'
        layout={{
          'icon-image': 'taipei-metro',
          'icon-allow-overlap': true,
          'icon-size': ['step', ['zoom'], 0.8, 12, 1],
          'icon-padding': 0,
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 1.2,
          'text-field': ['get', 'station'],
          'text-size': ['step', ['zoom'], 11, 13, 12],
          'text-justify': 'auto',
          'text-padding': 0,
        }}
        paint={{
          'text-color': '#085309',
          'text-halo-blur': 1,
          'text-halo-width': 1,
          'text-halo-color': '#fff',
        }}
      />

      <ShopMapInfo type='selectedShop' />
      {selectedShop?.id !== hoveredShop?.id && (
        <ShopMapInfo type='hoveredShop' />
      )}
    </Map>
  );
};

export default ShopMap;
