import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // aonde devemos declarar o que queremos expor para outros modulos
    CursosComponent
  ]
})
export class CursosModule { }
