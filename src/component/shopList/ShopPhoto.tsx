import { useQuery } from 'react-query';

const fetchImageUrl = async (placeId: string) => {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const url = `https://places.googleapis.com/v1/${placeId}/media?maxHeightPx=400&maxWidthPx=400&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log(response.url);

  return response.url;
};

const ShopPhoto = () => {
  const placeId =
    'places/ChIJwdBHENqrQjQRvEKp28zTI0k/photos/AWU5eFjkUorBpQ-7c8WVkJRqKEdRmAaLHR57ZDfjYf2oWr0vrfemSEREJdEDLt8VkqJdXikx4fmP7R2owfAkWh0vfbUyQhW2u6oY941jNLdOIHAaLhqIg5vyJiuv0r-Z5tWE4NsBoVpyRNrn2daWAA5Or9UqWhlsVzTTanvS';
  const {
    data: imageUrl,
    isLoading,
    error,
  } = useQuery(['placeImage', placeId], () => fetchImageUrl(placeId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;

  return <div>{imageUrl && <img src={imageUrl} alt='Place' />}</div>;
};

export default ShopPhoto;
