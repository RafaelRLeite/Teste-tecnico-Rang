import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UnidadeSaude } from 'src/app/models/unidade-saude';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';

@Component({
  selector: 'app-modal-update-unidade-saude',
  templateUrl: './modal-update-unidade-saude.component.html',
  styleUrls: ['./modal-update-unidade-saude.component.css']
})
export class ModalUpdateUnidadeSaudeComponent implements OnInit {
  id!: number;
  UnidadeSaudeForm!: FormGroup;
  nomeUnidadeSaude!:string;

  constructor(
    public modal: NgbActiveModal,
    private service: UnidadeSaudeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.UnidadeSaudeForm = this.formBuilder.group({
      tx_razao_social: ['', Validators.required],
      tx_nome_fantasia: ['', Validators.required],
      nr_cnpj: ['', Validators.required],
      dt_abertura: ['', Validators.required],
    });
    this.getById();
  }

  getById() {
    this.service.getById(this.id).subscribe({
      next: (response) => {
        this.populateUnidadeSaudeForm(response);
        this.nomeUnidadeSaude = response.tx_nome_fantasia;
      },
      error: () => {
        this.Error('Erro na busca do Médico');
      },
    });
  }

  update() {
    this.service.update(this.id, this.UnidadeSaudeForm.value).subscribe({
      next: () =>{
        this._snackBar.open('Unidade de Saúde atualizada com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'custom-snackbar',
        });
        this.modal.close('Close click');
        this.recarregarComponente();
      },
      error: () =>{
        this.Error('Erro na atualização da Unidade de Saúde')
      }
    })
  }

  private populateUnidadeSaudeForm(unidadeSaude: UnidadeSaude): void {
    this.UnidadeSaudeForm.patchValue({
      tx_razao_social: unidadeSaude.tx_razao_social,
      tx_nome_fantasia: unidadeSaude.tx_nome_fantasia,
      nr_cnpj: unidadeSaude.nr_cnpj,
      dt_abertura: unidadeSaude.dt_abertura,
    });
  }

  private recarregarComponente() {
    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/listarUnidadeSaude']);
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
