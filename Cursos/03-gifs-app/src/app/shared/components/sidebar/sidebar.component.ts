import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  get searchHistory() {
    return [...this.gifService.tagsHistory];
  }

  public clickSearch(tag: string) {
    this.gifService.searchTag(tag);
  }
}
