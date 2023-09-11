import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css'],
})
export class ModalEditarComponent implements OnInit {
  id!: number;
  agendamentoForm!: FormGroup;
  @Output() modalFechada = new EventEmitter<void>();

  constructor(
    public modal: NgbActiveModal,
    private service: AgendamentoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.agendamentoForm = this.formBuilder.group({
      dtMarcacaoControl: ['', Validators.required],
      hrMarcacaoControl: ['', Validators.required],
      medico: ['', Validators.required],
    });

    this.getById();
  }

  getById() {
    this.service.getById(this.id).subscribe((response) => {
      if (response) {
        this.agendamentoForm.patchValue({
          dtMarcacaoControl: response.dt_marcacao.split(' ')[0],
          hrMarcacaoControl: response.dt_marcacao.split(' ')[1],
          medico: response.medico,
        });
      }
    });
  }

  update() {
    this.service
      .updateAgendamento(this.id, this.agendamentoForm.value)
      .subscribe((response) => {
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
