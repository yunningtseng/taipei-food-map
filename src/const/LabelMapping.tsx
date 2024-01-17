const categoryLabelMapping: { [key: string]: string } = {
  dessert: '甜點',
  ramen_restaurant: '拉麵',
};

const hierarchyLabelMapping: { [key: string]: string } = {
  cake: '蛋糕',
  douhua: '豆花',
  ice: '冰品',
};

const priceLabelMapping: { [key: string]: string } = {
  PRICE_LEVEL_MODERATE: '$ 一般價位',
  PRICE_LEVEL_INEXPENSIVE: '$$ 高價位',
};

const orderTypeLabelMapping: { [key: string]: string } = {
  delivery: '外送',
  dineIn: '內用',
  takeOut: '外帶',
};

const paymentLabelMapping: { [key: string]: string } = {
  cash: '現金',
  creditCards: '信用卡',
  debitCards: '金融卡',
  NFC: 'NFC',
};

const otherLabelMapping: { [key: string]: string } = {
  goodForChildren: '適合兒童',
  goodForGroups: '適合團體',
};

export {
  categoryLabelMapping,
  hierarchyLabelMapping,
  priceLabelMapping,
  orderTypeLabelMapping,
  paymentLabelMapping,
  otherLabelMapping,
};
