import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  private name: string = 'ironman';
  private age: number = 45;

  get getNameUpperCase(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  get getName(): string {
    return this.name;
  }

  get getAge(): number {
    return this.age;
  }

  get getCapitalizedName(): string {
    return this.name.toUpperCase();
  }
  get getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 15;
  }

  resetHero(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
