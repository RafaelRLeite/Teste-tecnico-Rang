import { Component, Input } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarAgendamentoComponent } from '../modal-agendamento/modal-editar-agendamento/modal-editar-agendamento.component';
import { ModalExcluirComponent } from '../../modal/modal-excluir/modal-excluir.component';

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
      tx_especialidade: '',
    },
  };

  constructor(private modal: NgbModal) {}

  updateAgendamento(id: number | undefined) {
    const modalRef = this.modal.open(ModalEditarAgendamentoComponent);
    modalRef.componentInstance.id = id;
  }

  deleteAgendamento(id: number | undefined) {
    const modalRef = this.modal.open(ModalExcluirComponent);
    modalRef.componentInstance.id = id;
  }
}
