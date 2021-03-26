import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //angular lo eleva a un nivel global de la app, es dicir que puede funcionar en cualquier navegador
})
export class GifsService {
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apikey: string= 'C11UGmur0lNyalz76YcbcjwTBAixog3O';

  public resultados: any[] = [];
  private _historial:string[] = [];

  get historial(){
    return[...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados=JSON.parse(localStorage.getItem('resultados')!) || []
  }


  buscarGifs(query: string = ''){

    query=query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query) || query === ''){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);
    }

    localStorage.setItem('historial', JSON.stringify(this._historial));

    //realizar peticcion hhtp
    const params = new HttpParams()
    .set('api_key', this.apikey)
    .set('q', query)
    .set('limit','10')

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, {params})
    .subscribe((resp)=>{

      this.resultados=resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
      console.log(this.resultados);
    });
  }
}

