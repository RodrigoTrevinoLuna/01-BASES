import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes:string[] = ['spiderman', 'Ironman','Hulk','Thor']
  HeroeBorrado: string | undefined = "";
  borrarHeroe(){
    this.HeroeBorrado  = this.heroes.shift() || '';
  }
}
