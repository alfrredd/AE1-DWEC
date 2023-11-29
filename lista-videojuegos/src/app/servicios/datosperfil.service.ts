import { Injectable } from '@angular/core';
import { LoginComponent } from '../componentes/login/login/login.component';
import { StringifyOptions } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DatosperfilService {
  private usuarioActual: {usuario: String, contrasena: String} | null = null;



  constructor() { }

  login(usuario: String, contrasena: String): boolean {

    this.usuarioActual = {usuario, contrasena};

    return true;

  }

  logout(){
    this.usuarioActual = null;
  }
  getUsuarioActual(){
    return this.usuarioActual;
  }
}
