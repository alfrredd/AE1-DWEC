import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideojuegosComponent } from '../../videojuegos/videojuegos.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { Videojuego } from '../../../entidades/videojuego';
import { VideojuegosService } from '../../../servicios/videojuegos.service';


@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, VideojuegosComponent, RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{

  videojuegoId : number = 0;
  videojuego? : Videojuego;
  constructor(private route : ActivatedRoute, private videojuegosService : VideojuegosService){}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get("id");
    this.videojuegoId = idParam ? parseInt(idParam, 10) : 0;
    this.videojuego = this.videojuegosService.getVideojuegoPorId(this.videojuegoId);
  }

  


}
