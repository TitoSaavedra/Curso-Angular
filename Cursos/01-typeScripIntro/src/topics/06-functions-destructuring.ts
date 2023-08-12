export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150,
};

const tablet: Product = {
  description: 'iPad Air',
  price: 350,
};

interface TaxCalculationOptions {
  products: Product[];
  tax: number;
}

export const taxCalculation = (options: TaxCalculationOptions): number[] => {
  //const taxCalculation = ({ products, tax }: TaxCalculationOptions): number[] => {
  let total = 0;
  const { products, tax } = options;
  //   options.products.forEach(p => {
  //     const { price } = p;
  //     // total = total + p.price;
  //     total += price;
  //   });
  products.forEach(({ price }) => (total += price));
  return [total, total * tax];
};

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// // const taxes: TaxCalculationOptions = {
// //   products: shoppingCart,
// //   tax,
// // };

// // const result = taxCalculation(taxes);

// const result = taxCalculation({
//   products: shoppingCart,
//   tax,
// });

// const [total, totalTax] = result;

// console.log('Total: ', total);
// console.log('Tax:', totalTax);
