import { RawPlace } from '../types/place';

export const transformPlaceData = (textQuery: string, data: RawPlace[]) => {
  const shopList = [];
  console.log(data);

  for (const item of data) {
    const id = item.id;
    const displayName = item.displayName.text;

    const location = {
      latitude: item.location.latitude,
      longitude: item.location.longitude,
    };
    const primaryType = item.primaryType;

    const orderType = [];
    if (item.dineIn) {
      orderType.push('dineIn');
    }
    if (item.takeout) {
      orderType.push('takeOut');
    }
    if (item.delivery) {
      orderType.push('delivery');
    }

    const googleMapsUri = item.googleMapsUri;

    const rating = item.rating;
    const userRatingCount = item.userRatingCount;

    let ratingStar = 0;
    if (item.rating === 5) {
      ratingStar = 5;
    } else if (item.rating >= 4 && item.rating < 5) {
      ratingStar = 4;
    } else if (item.rating >= 3 && item.rating < 4) {
      ratingStar = 3;
    } else if (item.rating >= 2 && item.rating < 3) {
      ratingStar = 2;
    } else if (item.rating >= 1 && item.rating < 2) {
      ratingStar = 1;
    }

    const photoNames = item.photos?.map((photo) => photo.name) ?? [];
    const imgUrls = {};
    const editorialSummary = item.editorialSummary?.text ?? '';

    let establishment = '';
    let subpremise = '';
    let streetNumber = '';
    let route = '';
    let administrativeAreaLevel2 = '';
    let administrativeAreaLevel1 = '';

    item.addressComponents.forEach((component) => {
      if (component.types.includes('establishment')) {
        establishment = component.longText;
      } else if (component.types.includes('subpremise')) {
        if (component.longText[0] === '號') {
          component.longText = component.longText.substring(1);
        }
        subpremise = component.longText;
      } else if (component.types.includes('street_number')) {
        if (component.longText[component.longText.length - 1] !== '號') {
          component.longText += '號';
        }
        streetNumber = component.longText;
      } else if (component.types.includes('route')) {
        route = component.longText;
      } else if (component.types.includes('administrative_area_level_2')) {
        administrativeAreaLevel2 = component.longText;
      } else if (component.types.includes('administrative_area_level_1')) {
        administrativeAreaLevel1 = component.longText;
      }
    });

    const formattedAddress =
      administrativeAreaLevel1 +
      administrativeAreaLevel2 +
      route +
      streetNumber +
      subpremise +
      establishment;

    const newData = {
      id,
      displayName,
      location,
      primaryType,
      orderType,
      googleMapsUri,
      ratingStar,
      rating,
      userRatingCount,
      formattedAddress,
      photoNames,
      imgUrls,
      editorialSummary,
    };

    shopList.push(newData);
  }

  return shopList;
};
