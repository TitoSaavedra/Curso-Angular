export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Fernando',
};

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia', 'Gabriel'],
};

const printChinldren = (passenger: Passenger): void => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
};

printChinldren(passenger1);
printChinldren(passenger2);
