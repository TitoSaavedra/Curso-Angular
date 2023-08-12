import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characterList: Character[] = [
    {
      id: uuidv4(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 8500,
    },
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 3000,
    },
  ];

  public addCharacterToList = (character: Character): void => {
    const newCharacter: Character = {
      id: uuidv4(),
      ...character,
    };
    this.characterList.push(newCharacter);
  };

  public deleteCharacterById = (id: string): void => {
    this.characterList = this.characterList.filter(
      (character) => character.id !== id
    );
  };
}
