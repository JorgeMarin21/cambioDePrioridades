import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeedbackProyectoComponent } from './componentes/feedback-proyecto/feedback-proyecto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [
  { path: 'final', component: FeedbackProyectoComponent},
  { path: '', component: InicioComponent},
  {path: '**', redirectTo: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
