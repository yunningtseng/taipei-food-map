// import { arrayUnion, doc, getDoc, writeBatch } from 'firebase/firestore';
// import cakeData from '../../data/cakeData.json';
// import douhuaData from '../../data/douhuaData.json';
// import iceData from '../../data/iceData.json';
// import { db } from '../utils/firebaseInit';

// export async function uploadAllData() {
//   let idSet = new Set<string>();

//   idSet = await uploadData({
//     fileName: 'cakeData',
//     set: idSet,
//     categoryLv1: 'dessert',
//     categoryLv2: 'cake',
//     hierarchyLv1: '甜點',
//     hierarchyLv2: '甜點 > 蛋糕',
//   });
//   idSet = await uploadData({
//     fileName: 'douhuaData',
//     set: idSet,
//     categoryLv1: 'dessert',
//     categoryLv2: 'douhua',
//     hierarchyLv1: '甜點',
//     hierarchyLv2: '甜點 > 豆花',
//   });
//   idSet = await uploadData({
//     fileName: 'iceData',
//     set: idSet,
//     categoryLv1: 'dessert',
//     categoryLv2: 'ice',
//     hierarchyLv1: '甜點',
//     hierarchyLv2: '甜點 > 冰品',
//   });
//   return idSet;
// }

// type Props = {
//   fileName: string;
//   set: Set<string>;
//   categoryLv1: string;
//   categoryLv2: string;
//   hierarchyLv1: string;
//   hierarchyLv2: string;
// };

// export async function uploadData({
//   fileName,
//   set,
//   categoryLv1,
//   categoryLv2,
//   hierarchyLv1,
//   hierarchyLv2,
// }: Props) {
//   const batch = writeBatch(db);

//   const data =
//     fileName === 'cakeData'
//       ? cakeData
//       : fileName === 'douhuaData'
//       ? douhuaData
//       : iceData;

//   for (const item of data.places) {
//     // const mrtId = item.StationPosition.GeoHash;
//     // const docRef = doc(db, 'locations', mrtId);

//     const placeId = item.id;
//     const docRef = doc(db, 'places', placeId);

//     if (set.has(placeId)) {
//       batch.update(docRef, {
//         categoryLv1: arrayUnion(categoryLv1),
//         categoryLv2: arrayUnion(categoryLv2),
//         hierarchyLv1: arrayUnion(hierarchyLv1),
//         hierarchyLv2: arrayUnion(hierarchyLv2),
//       });
//     } else {
//       set.add(item.id);

//       const orderType = [];
//       if (item.dineIn) {
//         orderType.push('dineIn');
//       }
//       if (item.takeout) {
//         orderType.push('takeOut');
//       }
//       if (item.delivery) {
//         orderType.push('delivery');
//       }

//       const paymentType = [];
//       if (item.paymentOptions?.acceptsCashOnly) {
//         paymentType.push('cash');
//       }
//       if (item.paymentOptions?.acceptsCreditCards) {
//         paymentType.push('creditCards');
//       }
//       if (item.paymentOptions?.acceptsDebitCards) {
//         paymentType.push('debitCards');
//       }
//       if (item.paymentOptions?.acceptsNfc) {
//         paymentType.push('NFC');
//       }

//       let ratingStar = 0;
//       if (item.rating === 5) {
//         ratingStar = 5;
//       } else if (item.rating >= 4.5 && item.rating < 5) {
//         ratingStar = 4.5;
//       } else if (item.rating >= 4 && item.rating < 4.5) {
//         ratingStar = 4;
//       } else if (item.rating >= 3.5 && item.rating < 4) {
//         ratingStar = 3.5;
//       } else if (item.rating >= 3 && item.rating < 3.5) {
//         ratingStar = 3;
//       }

//       const geoloc = {
//         lat: item.location.latitude,
//         lng: item.location.longitude,
//       };

//       const photoNames = item.photos.map((photo) => photo.name);
//       const imgUrls = {};

//       batch.set(docRef, {
//         ...item,
//         categoryLv1: [categoryLv1],
//         categoryLv2: [categoryLv2],
//         hierarchyLv1: [hierarchyLv1],
//         hierarchyLv2: [hierarchyLv2],
//         orderType,
//         paymentType,
//         ratingStar,
//         _geoloc: geoloc,
//         photoNames,
//         imgUrls,
//       });
//     }
//   }

//   await batch.commit();

//   return set;
// }

// export async function getData() {
//   const docRef = doc(db, 'test', 'zzz');
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.data());
//   console.log('getting data');
// }
