import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PreparacionConsultaComponent } from './preparacion-consulta/preparacion-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotasComponent,
    PreparacionConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
