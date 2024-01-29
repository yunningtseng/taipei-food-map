import { RawPlace } from '../types/place';
import { LocationRestriction } from '../types/queryShop';

type ResultData = {
  places?: RawPlace[];
};

export type Props = {
  textQuery: string;
  locationRestriction: LocationRestriction;
  minRating: number;
};

export async function fetchPlaces({
  textQuery,
  locationRestriction,
  minRating,
}: Props) {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const res = await fetch(
    'https://places.googleapis.com/v1/places:searchText',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_API_KEY,
        'X-Goog-FieldMask':
          'places.id,places.displayName,places.googleMapsUri,places.location,places.addressComponents,places.photos,places.primaryType,places.rating,places.userRatingCount,places.dineIn,places.takeout,places.delivery,places.reviews,places.editorialSummary,places.types',
      },
      body: JSON.stringify({
        textQuery,
        languageCode: 'zh-TW',
        regionCode: 'TW',
        rankPreference: 'RELEVANCE',
        minRating,
        locationRestriction,
      }),
    }
  );

  const resData: ResultData = await res.json();

  return resData?.places ?? [];
}
