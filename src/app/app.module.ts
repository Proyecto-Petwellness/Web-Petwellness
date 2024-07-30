import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { RecordatoriosModule } from './recordatorios/recordatorios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,
    RecordatoriosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
