import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAgendamentoComponent } from './componentes/agendamentos/criar-agendamento/criar-agendamento.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';

const routes: Routes = [
  { path: '' ,
    redirectTo: 'criarAgendamento',
    pathMatch: 'full'
  },
  {
    path: 'criarAgendamento',
    component: CriarAgendamentoComponent
  },
  {
    path:'listarAgendamento',
    component: ListarAgendamentosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
