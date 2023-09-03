import { Component, Input } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
})
export class AgendamentoComponent {
  @Input() agendamento: Agendamento = {
    id: 0,
    dt_marcacao: '',
    status: '',
    dt_criacao_agendamento: '',
    medico: {
      tx_nome: '',
      tx_especialidade: ''
    },
  };
}
