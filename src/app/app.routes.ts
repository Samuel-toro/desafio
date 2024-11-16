import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'descripcion/:id', component: DescripcionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];