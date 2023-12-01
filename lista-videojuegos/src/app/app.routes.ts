import { Routes } from '@angular/router';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { DetalleComponent } from './componentes/detalle/detalle/detalle.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';

export const routes: Routes = [

    {path: "videojuegos", component: VideojuegosComponent},
    {path: "videojuego/:id", component: DetalleComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'about-us', component: AboutUsComponent },
];


