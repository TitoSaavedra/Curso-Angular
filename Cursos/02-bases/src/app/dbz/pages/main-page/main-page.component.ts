import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characterList(): Character[] {
    return [...this.dbzService.characterList];
  }
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
  onAddCharacter(character: Character): void {
    this.dbzService.addCharacterToList(character);
  }
}
