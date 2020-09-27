import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { IteracionProcesoComponent } from './componentes/iteracion-proceso/iteracion-proceso.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { FeedbackProyectoComponent } from './componentes/feedback-proyecto/feedback-proyecto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IteracionProcesoComponent,
    BotonesComponent,
    FeedbackProyectoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
