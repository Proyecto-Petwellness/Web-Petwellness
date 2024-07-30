import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { InicioModule } from './inicio/inicio.module';
import { MeetingModule } from './meeting/meeting.module';
import { ConsultsModule } from './consults/consults.module';
import { RegistrarMascotaModule } from './registrar-mascota/registrar-mascota.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    InicioModule,
    MeetingModule,
    ConsultsModule,
    RegistrarMascotaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
