import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent  {

  //Aqui se muestran los resultados en pantalla
  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService){}
}
