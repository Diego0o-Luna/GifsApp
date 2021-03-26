import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

@ViewChild('txtBuscar') txtbuscar!: ElementRef<HTMLInputElement>;
//inyeccion de dependencias del servicio gifs
//constructor de llamada del query del gifs.service.ts
constructor(private gifsService: GifsService){}


buscar(){
  const valor = this.txtbuscar.nativeElement.value;

  this.gifsService.buscarGifs(valor);
  this.txtbuscar.nativeElement.value='';
}
}
