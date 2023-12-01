import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  texto: string = 'Texto predeterminado';

  constructor(public dialogRef: MatDialogRef<AboutUsComponent>) { }

  ngOnInit(): void {
    // Lógica de Sinicialización si es necesario
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
