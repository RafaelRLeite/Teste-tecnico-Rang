import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map } from 'rxjs';
import { Medico } from 'src/app/models/medico';
import { UnidadeSaude } from 'src/app/models/unidade-saude';
import { MedicoService } from 'src/app/services/medico.service';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';

@Component({
  selector: 'app-modal-update-medico',
  templateUrl: './modal-update-medico.component.html',
  styleUrls: ['./modal-update-medico.component.css'],
})
export class ModalUpdateMedicoComponent implements OnInit {
  id!: number;
  medicoForm!: FormGroup;
  listaUnidadeSaude!: UnidadeSaude[];
  nomeMedico!:string;
  chosenItem!:any

  constructor(
    public modal: NgbActiveModal,
    private service: MedicoService,
    private unidadeSaudeService: UnidadeSaudeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.medicoForm = this.formBuilder.group({
      tx_nome: ['', Validators.required],
      nr_cpf: ['', Validators.required],
      nr_crm: ['', Validators.required],
      tx_especialidade: ['', Validators.required],
      unidade_saude_atual: ['', Validators.required],
      unidade_saude: ['', Validators.required],
    });
    this.getById();
    this.getAllUnidadesSaude();
    this.getUnidadeSaudeByMedicoId();
  }

  getById() {
    this.service.getById(this.id).subscribe({
      next: (response) => {
        this.populateMedicoForm(response);
        this.nomeMedico = response.tx_nome;
      },
      error: () => {
        this.Error('Erro na busca do Médico');
      },
    });
  }

  update() {
    this.service.update(this.id, this.medicoForm.value).subscribe({
      next: () =>{
        this._snackBar.open('Médico atualizado com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: 'custom-snackbar',
        });
        this.modal.close('Close click');
        this.recarregarComponente();
      },
      error: () =>{
        this.Error('Erro na atualização do Médico')
      }
    })
  }

  private getAllUnidadesSaude() {
    this.unidadeSaudeService.getAll().subscribe({
      next: (response) => {
        this.listaUnidadeSaude = response;
      },
      error: () => {
        this.Error('Erro na busca das Unidades de Saúde')
      },
    });
  }

  private getUnidadeSaudeByMedicoId() {
    return this.service.getUnidadeSaudeByMedicoId(this.id).subscribe({
      next: (response) =>{
        this.medicoForm.patchValue({
        unidade_saude_atual : response.tx_nome_fantasia,
        })
        this.medicoForm.get('unidade_saude_atual')?.disable();
        this.chosenItem = response
      },
      error: () => {
        this.Error('Erro na busca da Unidade de Saúde do Médico')
      },
    })
  }

  private populateMedicoForm(medico: Medico): void {
    this.medicoForm.patchValue({
      tx_nome: medico.tx_nome,
      nr_cpf: medico.nr_cpf,
      nr_crm: medico.nr_crm,
      tx_especialidade: medico.tx_especialidade
    });
  }

  private recarregarComponente() {
    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/listarMedico']);
      });
    }, 1000);
  }

  private Error(message: string): void {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: 'custom-snackbar',
    });
  }
}
