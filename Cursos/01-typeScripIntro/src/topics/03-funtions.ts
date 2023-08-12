// function addNumbers(a: any, b: number) {
//   return a + b;
// }

// const addNumberArray = (a: number, b: number): number => {
//   return a + b;
// };

// const multiply = (a: number, b?: number, c: number = 2): number => {
//   return a * c;
// };

// console.log();

// const result: number = addNumbers(1, 2);
// const result2: number = addNumberArray(1, 2);
// const result3: number = multiply(3);
// console.log({ result, result2, result3 });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
  if (character.hp > 100) {
    character.hp = 100;
  }
};

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp: function (): void {
    console.log(`Heal points ${this.hp}`);
  },
};

healCharacter(strider, 10);
healCharacter(strider, 5800);
healCharacter(strider, 10);
healCharacter(strider, 10);
healCharacter(strider, 10);
healCharacter(strider, 10);
healCharacter(strider, 10);
healCharacter(strider, 10);
healCharacter(strider, 10);
healCharacter(strider, 10);
healCharacter(strider, 10);

strider.showHp();
export {};
