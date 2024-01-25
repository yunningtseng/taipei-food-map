import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchPlaces } from '../api/fetchPlaces';
import useQueryShopStore from '../store/useQueryShopStore';
import { transformPlaceData } from '../utils/transformPlaceData';

export const useFetchPlaces = () => {
  const textQuery = useQueryShopStore.use.textQuery();
  const locationRestriction = useQueryShopStore.use.locationRestriction();

  const fetchAndTransformPlaces = useCallback(async () => {
    const data = await fetchPlaces({ textQuery, locationRestriction });
    return transformPlaceData(textQuery, data);
  }, [textQuery, locationRestriction]);

  const res = useQuery({
    queryKey: ['places', textQuery, locationRestriction],
    queryFn: fetchAndTransformPlaces,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    enabled: !!textQuery,
  });

  return res;
};
