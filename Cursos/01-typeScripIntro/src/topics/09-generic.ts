export function whatsMytype<T>(argument: T): T {
  return argument;
}

const amIString = whatsMytype<string>('hello');
const amINumber = whatsMytype<number>(1);
const amIArray = whatsMytype<number[]>([1, 2, 3, 4]);

console.log(amIString.split(''), amINumber, amIArray.join(''));
