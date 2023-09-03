import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAgendamentoComponent } from './componentes/agendamentos/criar-agendamento/criar-agendamento.component';

const routes: Routes = [
  {path: '', component: CriarAgendamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
