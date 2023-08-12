import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulos
import { CounterModule } from './counter/counter.module';
// Componentes
import { AppComponent } from './app.component';
import { HeroModule } from './heroes/components/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
