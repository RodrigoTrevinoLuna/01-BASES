import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre:'goku',
      poder:45000
    },
    {
      nombre:'Vegeta',
      poder:10000
    }
  ]
  nuevo:Personaje = {
    nombre: 'Maestro Roshi',
    poder:1000
  }

  agregarNuevoPersonaje(argumento: Personaje){
  this.personajes.push(argumento);
  }

}
