import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeletionCharacter: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [];

  public deleteCharacter(id?: string): void {
    if (!id) {
      return;
    }
    this.onDeletionCharacter.emit(id);
  }
}
