import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {};

  public addCharacter(): void {
    if (!this.validateCharacter()) {
      return;
    }
    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter = {};
  }

  private validateCharacter(): boolean {
    if (this.newCharacter.name?.trim().length === 0) {
      return false;
    }
    if (
      this.newCharacter.power === undefined ||
      this.newCharacter.power === null
    ) {
      return false;
    }
    return true;
  }
}
