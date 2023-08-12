import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #inputSearch
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('inputSearch')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const value = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(value);
    this.tagInput.nativeElement.value = '';
  }
}
