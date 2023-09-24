import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './componentes/home/home.component';
import { CriarAgendamentoComponent } from './componentes/agendamentos/criar-agendamento/criar-agendamento.component';
import { AgendamentoComponent } from './componentes/agendamentos/agendamento/agendamento.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';
import { ListarMedicosComponent } from './componentes/medicos/listar-medicos/listar-medicos.component';
import { ListarUnidadeSaudeComponent } from './componentes/unidade-saude/listar-unidade-saude/listar-unidade-saude.component';
import { ModalExcluirAgendamentoComponent } from './componentes/agendamentos/modal-agendamento/modal-excluir-agendamento/modal-excluir-agendamento.component';
import { ModalCriarMedicoComponent } from './componentes/medicos/modal/modal-criar-medico/modal-criar-medico.component';
import { ModalExcluirMedicoComponent } from './componentes/medicos/modal/modal-excluir-medico/modal-excluir-medico.component';
import { ModalEditarAgendamentoComponent } from './componentes/agendamentos/modal-agendamento/modal-editar-agendamento/modal-editar-agendamento.component';
import { ModalCriarUnidadeSaudeComponent } from './componentes/unidade-saude/modal/modal-criar-unidade-saude/modal-criar-unidade-saude.component';
import { ModalExcluirUnidadeSaudeComponent } from './componentes/unidade-saude/modal/modal-excluir-unidade-saude/modal-excluir-unidade-saude.component';
import { ModalUpdateUnidadeSaudeComponent } from './componentes/unidade-saude/modal/modal-update-unidade-saude/modal-update-unidade-saude.component';
import { ModalUpdateMedicoComponent } from './componentes/medicos/modal/modal-update-medico/modal-update-medico.component';
import { ModalCriarTelefoneComponent } from './componentes/telefone/modal/modal-criar-telefone/modal-criar-telefone.component';
import { ModalExcluirTelefoneComponent } from './componentes/telefone/modal/modal-excluir-telefone/modal-excluir-telefone.component';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { ModalCriarEnderecoComponent } from './componentes/endereco/modal/modal-criar-endereco/modal-criar-endereco.component';
import { ModalExcluirEnderecoComponent } from './componentes/endereco/modal/modal-excluir-endereco/modal-excluir-endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    CriarAgendamentoComponent,
    ListarAgendamentosComponent,
    FooterComponent,
    NavBarComponent,
    ModalEditarAgendamentoComponent,
    ModalExcluirAgendamentoComponent,
    ListarMedicosComponent,
    ModalCriarMedicoComponent,
    ModalExcluirMedicoComponent,
    ListarUnidadeSaudeComponent,
    ModalCriarUnidadeSaudeComponent,
    ModalExcluirUnidadeSaudeComponent,
    ModalUpdateUnidadeSaudeComponent,
    ModalUpdateMedicoComponent,
    HomeComponent,
    ModalCriarTelefoneComponent,
    ModalExcluirTelefoneComponent,
    ModalCriarEnderecoComponent,
    ModalExcluirEnderecoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MomentDateModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatRadioModule,
    MatIconModule,
  ],
  providers: [
    provideNgxMask(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class CustomDateModule {}
