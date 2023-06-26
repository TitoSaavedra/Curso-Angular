export class Person {
  //   public name: string;
  //   private address: string;
  constructor(public name: string, private address: string) {}
}

// export class Hero extends Person {
//   constructor(public alterEgo: string, public age: number, public realName: string) {
//     super(realName, 'New York, USA');
//   }
// }
export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}
const peter = new Person('Peter', 'New York, USA');
const larvarito = new Hero('Larva', 25, 'Larvarito', peter);

console.log(larvarito);
