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
      let videojuego : Videojuego = new Videojuego("The Legend Of Zelda: Breath Of The Wild", "Nintendo","assets/images/botw.jpeg",9.5,"The Legend of Zelda es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka, desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.");
    this._listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Devil May Cry","Capcom","assets/images/dmc.jpeg", 9.4,"Dante, un cazador de demonios, hijo de Sparda, que lucha contra el mal para vengar la muerte de su madre. Devil May Cry nos lleva a enormes escenarios de inspiración gótica y barroca, planteándonos luchas salvajes contra demonios de todos los tamaños, así como partes de plataformas y algunos puzles.");
    this._listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("Three Fourths Home", "Bracket Games", "assets/images/tfh.jpeg", 7.4,"Three Fourths Home es una historia corta visual donde asumiremos el rol de Jelly durante su viaje a través de una tormenta. En las 20 millas de campos de maíz entre la casa de sus padres y la de sus abuelos, recibirá una llamada de su madre. Mientras conducimos a través de una estilizada representación de la Nebraska rural, deberemos llevar a cabo una extensa conversación entre Kelly, sus padres y su hermano pequeño, viviendo ese específico momento y tocando temas que afectan a nuestro personaje.")
    this._listaVideojuegos.push(videojuego);
    videojuego = new Videojuego("The Talos Principle", "Croteam", "assets/images/ttp.jpeg", 8.5,"Juego de rompecabezas en primera persona que toma como principio un concepto filosófico de la ciéncia ficción, situándonos en un mundo lleno de ruinas ancestrales combinada con la más avanzada tecnología. Dispondremos de más de 120 rompecabezas y una gran variedad de robots y artilugios que utilizar mientras exploramos una historia sobre la humanidad, la tecnología y la civilización que se verá afectada con nuestras decisiones.")
    this._listaVideojuegos.push(videojuego);

    this.listaInicializada = true;
    }
   
    }
    get listaVideojuegos() : Videojuego[] {
      return this._listaVideojuegos;
  }
}
