import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { CriarAgendamentoComponent } from './componentes/agendamentos/criar-agendamento/criar-agendamento.component';
import { AgendamentoComponent } from './componentes/agendamentos/agendamento/agendamento.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';
import { ModalExcluirComponent } from './componentes/modal/modal-excluir/modal-excluir.component';
import { ModalEditarComponent } from './componentes/modal/modal-editar/modal-editar.component';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    CriarAgendamentoComponent,
    ListarAgendamentosComponent,
    FooterComponent,
    NavBarComponent,
    ModalEditarComponent,
    ModalExcluirComponent,
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
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
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
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class CustomDateModule {}
