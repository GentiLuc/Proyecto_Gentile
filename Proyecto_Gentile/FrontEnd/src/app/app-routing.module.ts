import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { NewAcercadeComponent } from './components/acerca-de/new-acercade.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaE', component: NewExperienciaComponent },
  {path: 'editE/:id', component: EditExperienciaComponent},
  {path: 'nuevaed', component: NewEducacionComponent},
  {path: 'edited/:id', component: EditEducacionComponent},
  {path: 'nuevoP', component: NewProyectosComponent},
  {path: 'editP/:id', component: EditProyectosComponent},
  {path: 'editA/:id', component: EditAcercadeComponent},
  {path: 'nuevaA', component: NewAcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
