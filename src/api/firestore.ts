import { doc, getDoc, writeBatch } from 'firebase/firestore';
import localData from '../../data/data.json';
import { db } from '../utils/firebaseInit';

export async function uploadData() {
  const batch = writeBatch(db);

  for (const item of localData.places) {
    const placeId = item.id;
    const docRef = doc(db, 'places', placeId);

    batch.set(docRef, item);
  }

  await batch.commit();
}

export async function getData() {
  const docRef = doc(db, 'test', 'zzz');
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  console.log('getting data');
}
