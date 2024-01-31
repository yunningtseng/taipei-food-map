import { useQuery } from '@tanstack/react-query';
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { useCallback } from 'react';
import { db } from '../utils/firebaseInit';

const fetchImageUrl = async (photoName: string) => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=400&maxWidthPx=400&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.url;
};

const setPhotoUrl = async (
  id: string,
  photoName: string,
  imgUrl: string,
  photoId: string
) => {
  const collectionRef = collection(db, 'photos');
  const docRef = doc(collectionRef);
  await setDoc(docRef, {
    placeId: id,
    url: imgUrl,
    name: photoName,
    photoId: photoId,
  });
};

type PhotoUrlProps = {
  id: string;
  photoId: string;
};

type FetchPhotoProps = {
  id: string;
  photoName: string;
};

const getPhotoUrl = async ({ id, photoId }: PhotoUrlProps) => {
  const q = query(
    collection(db, 'photos'),
    where('placeId', '==', id),
    where('photoId', '==', photoId),
    limit(1)
  );
  const querySnap = await getDocs(q);

  if (!querySnap.docs.length) {
    return null;
  }

  const docSnap = querySnap.docs[0];
  const imgUrl = docSnap.data().url as string;

  return imgUrl;
};

export const useFetchPhoto = ({ id, photoName }: FetchPhotoProps) => {
  const photoId = photoName?.slice(-15);

  const fetchAndTransformPhotos = useCallback(async () => {
    const savedImgUrl = await getPhotoUrl({ id, photoId });

    if (savedImgUrl) {
      return savedImgUrl;
    } else {
      const imgUrl = await fetchImageUrl(photoName);
      setPhotoUrl(id, photoName, imgUrl, photoId);
      return imgUrl;
    }
  }, [id, photoName, photoId]);

  const res = useQuery({
    queryKey: ['placeImage', id, photoId],
    queryFn: fetchAndTransformPhotos,
    enabled: photoName !== '',
    staleTime: 1000 * 60 * 60 * 24 * 7,
  });

  return res;
};
