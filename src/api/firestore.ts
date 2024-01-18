import { doc, getDoc, writeBatch } from 'firebase/firestore';
import localData from '../../data/cakeData.json';
import { db } from '../utils/firebaseInit';

export async function uploadData() {
  const batch = writeBatch(db);

  for (const item of localData.places) {
    // const mrtId = item.StationPosition.GeoHash;
    // const docRef = doc(db, 'locations', mrtId);
    const category = 'dessert';
    const hierarchy = 'cake';
    const lv1 = '甜點';
    const lv2 = '甜點 > 蛋糕';

    const placeId = item.id;
    const docRef = doc(db, 'places', placeId);

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

    const paymentType = [];
    if (item.paymentOptions?.acceptsCashOnly) {
      paymentType.push('cash');
    }
    if (item.paymentOptions?.acceptsCreditCards) {
      paymentType.push('creditCards');
    }
    if (item.paymentOptions?.acceptsDebitCards) {
      paymentType.push('debitCards');
    }
    if (item.paymentOptions?.acceptsNfc) {
      paymentType.push('NFC');
    }

    let ratingStar = 0;
    if (item.rating === 5) {
      ratingStar = 5;
    } else if (item.rating >= 4.5 && item.rating < 5) {
      ratingStar = 4.5;
    } else if (item.rating >= 4 && item.rating < 4.5) {
      ratingStar = 4;
    } else if (item.rating >= 3.5 && item.rating < 4) {
      ratingStar = 3.5;
    } else if (item.rating >= 3 && item.rating < 3.5) {
      ratingStar = 3;
    }

    const geoloc = {
      lat: item.location.latitude,
      lng: item.location.longitude,
    };

    batch.set(docRef, {
      ...item,
      category,
      hierarchy,
      lv1,
      lv2,
      orderType,
      paymentType,
      ratingStar,
      _geoloc: geoloc,
    });
  }

  await batch.commit();
}

export async function getData() {
  const docRef = doc(db, 'test', 'zzz');
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  console.log('getting data');
}
