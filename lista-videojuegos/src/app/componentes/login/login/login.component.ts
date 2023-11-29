import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosperfilService } from '../../../servicios/datosperfil.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  mostrarContrasena : boolean = false;
  usuario : String = "";
  contrasena : String = "";
  private users = [
    {usuario: "usuario", contrasena: "contrasena"},
    {usuario: "usuario2", contrasena: "contrasena2"}
  ];
  public loginError : boolean = false;

  constructor(private router : Router, private datosperfil : DatosperfilService) {}

  onLogin(){
    const user = this.users.find(u => u.usuario === this.usuario && u.contrasena === this.contrasena);
   
    if(user){
      console.log("Login exitoso");
      this.datosperfil.login(this.usuario, this.contrasena);
      this.router.navigate(['/videojuegos']);
    }
    else {
      this.loginError = true;
    }

  }



}
