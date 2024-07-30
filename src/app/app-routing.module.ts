import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'historial', loadChildren: () => import('./historial/historial.module').then(m => m.HistorialModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
