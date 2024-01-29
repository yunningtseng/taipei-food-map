import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchPlaces } from '../api/fetchPlaces';
import useQueryShopStore from '../store/useQueryShopStore';
import { transformPlaceData } from '../utils/transformPlaceData';
import { calculateLocationRestriction } from '../utils/calculateLocationRestriction';

export const useFetchPlaces = () => {
  const foodType = useQueryShopStore.use.foodType();
  const center = useQueryShopStore.use.locationCenter();
  const distance = useQueryShopStore.use.distance();
  const minRating = useQueryShopStore.use.minRating();

  const fetchAndTransformPlaces = useCallback(async () => {
    const locationRestriction = calculateLocationRestriction({
      center,
      distance,
    });

    const data = await fetchPlaces({
      textQuery: foodType,
      locationRestriction,
      minRating: minRating === '不限' ? 1 : Number(minRating),
    });

    return transformPlaceData(data, center);
  }, [foodType, center, distance, minRating]);

  const res = useQuery({
    queryKey: ['places', foodType, center, distance, minRating],
    queryFn: fetchAndTransformPlaces,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    enabled: !!foodType,
  });

  return res;
};
