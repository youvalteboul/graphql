const products = [
  {
    id: "1",
    title: 'Robe',
    price: 10.99,
    size: 'S',
  },
  {
    id: "2",
    title: 'Pantalon',
    price: 9.99,
    size: 'S',
  },
  {
    id: "5",
    title: 'Veste',
    price: 15.99,
    size: 'S',
  },
];

export default {
  Query: {
    products: () => products,
    productById: (parent, { id }, context, info) =>
      products.find(product => {
        return product.id === id ? product : null;
      }),
  },
};
