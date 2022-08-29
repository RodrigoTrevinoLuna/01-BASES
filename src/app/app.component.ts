import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Contador App';
  numero:number = 89;

  // sumar(){
  //   this.numero+=1;
  // }
  // restar(){
  //   this.numero-=1;
  // }

  acumular(valor:number){
    this.numero+=valor;
  }

  //Actividad
  base:number = 5;
}