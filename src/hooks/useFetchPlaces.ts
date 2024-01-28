import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchPlaces } from '../api/fetchPlaces';
import useQueryShopStore from '../store/useQueryShopStore';
import { transformPlaceData } from '../utils/transformPlaceData';
import { calculateLocationRestriction } from '../utils/calculateLocationRestriction';

export const useFetchPlaces = () => {
  const textQuery = useQueryShopStore.use.textQuery();
  const center = useQueryShopStore.use.locationCenter();
  const distance = useQueryShopStore.use.distance();
  const rating = useQueryShopStore.use.rating();

  const fetchAndTransformPlaces = useCallback(async () => {
    const locationRestriction = calculateLocationRestriction({
      center,
      distance,
    });
    const data = await fetchPlaces({
      textQuery,
      locationRestriction,
      rating,
    });
    return transformPlaceData(textQuery, data);
  }, [textQuery, center, distance, rating]);

  const res = useQuery({
    queryKey: ['places', textQuery, center, distance, rating],
    queryFn: fetchAndTransformPlaces,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    enabled: !!textQuery,
  });

  return res;
};
