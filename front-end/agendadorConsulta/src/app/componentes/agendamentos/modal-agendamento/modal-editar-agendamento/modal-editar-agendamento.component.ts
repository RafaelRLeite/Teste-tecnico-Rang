import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-editar-agendamento',
  templateUrl: './modal-editar-agendamento.component.html',
  styleUrls: ['./modal-editar-agendamento.component.css'],
})
export class ModalEditarAgendamentoComponent implements OnInit {
  id!: number;
  agendamentoForm!: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private service: AgendamentoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar:MatSnackBar
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
    this.service.updateAgendamento(this.id, this.agendamentoForm.value).subscribe({
        next: () => {
          this._snackBar.open('Consulta remarcada com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'custom-snackbar',
        });
        this.modal.close('Close click');
        this.recarregarComponente();
        },
        error: () =>
          this._snackBar.open('Ocorreu um erro na remarcação da consulta', 'Fechar', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass:'custom-snackbar',
          })
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
