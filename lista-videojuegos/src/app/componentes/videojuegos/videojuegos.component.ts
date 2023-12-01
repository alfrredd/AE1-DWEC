import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Videojuego } from '../../entidades/videojuego';
import { RouterModule } from '@angular/router';
import { VideojuegosService } from '../../servicios/videojuegos.service';
import { DatosperfilService } from '../../servicios/datosperfil.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from '../about-us/about-us.component';

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

  constructor(private videojuegosService : VideojuegosService, private datosperfil : DatosperfilService, public dialog: MatDialog ){
  }

  ngOnInit(): void {
    this.videojuegosService.inicializarVideojuegos();
    this.usuarioActual = this.datosperfil.getUsuarioActual();
  }

  //Método para generar el pop up
  openPopup(): void {
    const dialogRef = this.dialog.open(AboutUsComponent, {
      width: '500px',
      height: '300px',
      position: {
        left: '500px'
      }
    });

    dialogRef.afterOpened().subscribe(() => {
      const aboutUsComponentInstance = dialogRef.componentInstance;
      aboutUsComponentInstance.texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El popup se cerró');
    }); 
  } 
}

