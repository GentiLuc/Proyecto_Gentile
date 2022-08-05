import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoYPComponent } from './components/logo-yp/logo-yp.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HssComponent } from './components/hss/hss.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PiepaginaComponent } from './components/piepagina/piepagina.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoYPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HssComponent,
    ProyectosComponent,
    PiepaginaComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }