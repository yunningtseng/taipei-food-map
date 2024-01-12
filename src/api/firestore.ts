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

    batch.set(docRef, {
      ...item,
      orderType,
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
