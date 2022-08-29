import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesComponent } from './heroes/heroes.component';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
