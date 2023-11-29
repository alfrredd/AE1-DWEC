import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Videojuego } from '../../entidades/videojuego';
import { RouterModule } from '@angular/router';
import { VideojuegosService } from '../../servicios/videojuegos.service';
import { DatosperfilService } from '../../servicios/datosperfil.service';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent implements OnInit {

  usuarioActual: {usuario: String, contrasena: String} | null = null;

  get listaVideojuegos() {
    return this.videojuegosService.listaVideojuegos;
  }

  constructor(private videojuegosService : VideojuegosService, private datosperfil : DatosperfilService){
  }

  ngOnInit(): void {

    this.videojuegosService.inicializarVideojuegos();
    this.usuarioActual = this.datosperfil.getUsuarioActual();
    

    
  }

  
  }

