import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-modal-excluir-agendamento',
  templateUrl: './modal-excluir-agendamento.component.html',
  styleUrls: ['./modal-excluir-agendamento.component.css'],
})
export class ModalExcluirAgendamentoComponent implements OnInit {
  id!: number;

  constructor(
    private service: AgendamentoService,
    public modal: NgbActiveModal,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    this.service.getById(this.id).subscribe((response) => {
      if (response.id !== undefined) {
        this.id = response.id;
      }
    });
  }

  excluir() {
    this.service.delete(this.id).subscribe((response) => {
      this.modal.close('Close click');
      this.recarregarComponente();
    });
  }

  recarregarComponente() {
    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/listarAgendamento']);
      });
    }, 1000);
  }
}
