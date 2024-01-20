import { doc, updateDoc } from 'firebase/firestore';
import { useQuery } from 'react-query';
import { db } from '../utils/firebaseInit';

const updatePhotoUrl = async (placeId: string, index: number, url: string) => {
  const docRef = doc(db, 'places', placeId);

  await updateDoc(docRef, {
    [`imgUrls.${index}`]: url,
  });
};

const fetchImageUrl = async (photoName: string) => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=400&maxWidthPx=400&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.url;
};

export const useFetchShopPhoto = (
  photoName: string,
  placeId: string,
  index: number
) => {
  const { data, isLoading } = useQuery(
    ['placeImage', photoName],
    () => fetchImageUrl(photoName),
    {
      enabled: photoName !== '',
      onSuccess(data) {
        updatePhotoUrl(placeId, index, data);
      },
    }
  );

  return { fetchedUrl: data, isLoading };
};
