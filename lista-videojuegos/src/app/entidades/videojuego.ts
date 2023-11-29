export class Videojuego{
        private _id: number;
        static idAuto = 0;
        
    constructor(public titulo: string, public compania: string, public imagen: string, public valoracionMedia: number)
    {
        this._id = ++Videojuego.idAuto;
        this.titulo = titulo;
        this.compania = compania;
        this.imagen = imagen;
        this.valoracionMedia = valoracionMedia;
    }
    
   public get id() : number{
    return this._id;
   }

}