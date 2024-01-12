const typeLabelMapping: { [key: string]: string } = {
  bakery: '烘培坊',
  ramen_restaurant: '拉麵',
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

export {
  typeLabelMapping,
  priceLabelMapping,
  orderTypeLabelMapping,
};
