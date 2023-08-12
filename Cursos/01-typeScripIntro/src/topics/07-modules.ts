import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCart: Product[] = [
  {
    description: 'Phone 1',
    price: 100,
  },
  {
    description: 'Phone 2',
    price: 200,
  },
];

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log('Total: ', total);
console.log('Tax: ', tax);
export {};
