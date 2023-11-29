import { Injectable } from '@angular/core';
import { Videojuego } from '../entidades/videojuego';


@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  private _listaVideojuegos : Videojuego[] = [];
  private listaInicializada = false;
  
  constructor() {}

  setVideojuegos(videojuegos: Videojuego[]){
    this._listaVideojuegos = videojuegos;
  }
  getVideojuegoPorId(id : number) : Videojuego | undefined{
    return this._listaVideojuegos.find(v => v.id == id);
  }

  inicializarVideojuegos(){
    if(!this.listaInicializada){
      let videojuego : Videojuego = new Videojuego("The Legend Of Zelda: Breath Of The Wild", "Nintendo","assets/images/botw.jpeg",9.5);
    this._listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Devil May Cry","Capcom","assets/images/dmc.jpeg", 9.4);
    this._listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Three Fourths Home", "Bracket Games", "assets/images/tfh.jpeg", 7.4)
    this._listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("The Talos Principle", "Croteam", "assets/images/ttp.jpeg", 8.5)
    this._listaVideojuegos.push(videojuego);

    this.listaInicializada = true;
    }
   
    }
    get listaVideojuegos() : Videojuego[] {
      return this._listaVideojuegos;
  }
}
