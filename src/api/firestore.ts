import { doc, getDoc, writeBatch } from 'firebase/firestore';
import localData from '../../data/data.json';
import { db } from '../utils/firebaseInit';

export async function uploadData() {
  const batch = writeBatch(db);

  for (const item of localData.places) {
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

    let rating = 0;
    if (item.rating === 5) {
      rating = 5;
    } else if (item.rating >= 4.5 && item.rating < 5) {
      rating = 4.5;
    } else if (item.rating >= 4 && item.rating < 4.5) {
      rating = 4;
    } else if (item.rating >= 3.5 && item.rating < 4) {
      rating = 3.5;
    } else if (item.rating >= 3 && item.rating < 3.5) {
      rating = 3;
    }

    const otherType = [];
    if (item.goodForChildren) {
      otherType.push('goodForChildren');
    }
    if (item.goodForGroups) {
      otherType.push('goodForGroups');
    }

    batch.set(docRef, {
      ...item,
      orderType,
      paymentType,
      rating,
      otherType,
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
