import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { AspiranteComponent } from './aspirante/aspirante.component';
import { HomeComponent } from './home/home.component';
import { InteresadoComponent } from './interesado/interesado.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { DocenteComponent } from './docente/docente.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
    {
        path: 'main', component: MainComponent, children: [
            {
                path: "home", component: HomeComponent, children: [
                    { path: "interesado", component: InteresadoComponent },
                    { path: "coordinador", component: CoordinadorComponent },
                    { path: "docente", component: DocenteComponent },
                    { path: "aspirante", component: AspiranteComponent },
                    { path: "cursos", component: CursosComponent }
                ]
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRouting { }
