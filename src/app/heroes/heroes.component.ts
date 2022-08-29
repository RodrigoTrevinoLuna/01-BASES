import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{

  nombre: string  = 'Ironman';
  edad: number = 45;
  
  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${ this.nombre } - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre= "spiderman";
  }
  cambiarEdad():void{
    this.edad = 30;
  }
}