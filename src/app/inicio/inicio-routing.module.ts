import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'tareas', component: TareasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
