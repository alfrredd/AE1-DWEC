import { Routes } from '@angular/router';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { DetalleComponent } from './componentes/detalle/detalle/detalle.component';
import { LoginComponent } from './componentes/login/login/login.component';

export const routes: Routes = [

    {path: "videojuegos", component: VideojuegosComponent},
    {path: "videojuego/:id", component: DetalleComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];

