import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = 'UC817WmQj7R3vXnFW3lwlAB7iaStlBjr';
const GIPHY_API_URL = 'http://api.giphy.com/v1/gifs/search?';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // Atributos
  private _tagsHistory: string[] = [];
  private _results: Gifs[] = [];
  // Constructor
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }
  // Getters y Setters
  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }
  get results(): Gifs[] {
    return [...this._results];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;
    const firstTag = [...this._tagsHistory].shift();
    this.searchTag(firstTag!);
  }

  private organizeTagsHistory(tag: string) {
    tag = tag.trim().toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(
        (t) => t.toLowerCase() !== tag
      );
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeTagsHistory(tag);

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', 15)
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${GIPHY_API_URL}`, { params })
      .subscribe((resp) => {
        this._results = resp.data;
      });
  }
}
