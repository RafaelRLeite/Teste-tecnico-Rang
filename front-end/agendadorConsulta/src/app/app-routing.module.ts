import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarAgendamentoComponent } from './componentes/agendamentos/criar-agendamento/criar-agendamento.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';
import { HomeComponent } from './componentes/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ListarMedicosComponent } from './componentes/medicos/listar-medicos/listar-medicos.component';
import { ListarUnidadeSaudeComponent } from './componentes/unidade-saude/listar-unidade-saude/listar-unidade-saude.component';

const routes: Routes = [
  { path: '' ,
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'criarAgendamento',
    component: CriarAgendamentoComponent,
    canActivate: [authGuard]
  },
  {
    path:'listarAgendamento',
    component: ListarAgendamentosComponent,
    canActivate: [authGuard]
  },
  {
    path:'listarMedico',
    component: ListarMedicosComponent,
    canActivate: [authGuard]
  },
  {
    path:'listarUnidadeSaude',
    component: ListarUnidadeSaudeComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
