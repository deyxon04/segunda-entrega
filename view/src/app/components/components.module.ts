import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspiranteComponent } from './aspirante/aspirante.component';
import { ComponentsRouting } from './components.routing';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AspiranteComponent,
    HomeComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    ComponentsRouting
  ],
  exports:[]
})
export class ComponentsModule { }
