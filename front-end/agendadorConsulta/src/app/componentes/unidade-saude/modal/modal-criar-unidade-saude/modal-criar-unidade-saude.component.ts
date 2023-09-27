import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';

@Component({
  selector: 'app-modal-criar-unidade-saude',
  templateUrl: './modal-criar-unidade-saude.component.html',
  styleUrls: ['./modal-criar-unidade-saude.component.css']
})
export class ModalCriarUnidadeSaudeComponent implements OnInit {
  id!: number;
  unidadeSaudeForm!: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private service: UnidadeSaudeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.unidadeSaudeForm = this.formBuilder.group({
      tx_razao_social: ['', Validators.required],
      tx_nome_fantasia: ['', Validators.required],
      nr_cnpj: ['', Validators.required],
      dt_abertura: ['', Validators.required],
    });
  }

  save(){
    this.service.save(this.unidadeSaudeForm.value).subscribe({
      next: () =>{
        this._snackBar.open('Unidade de Saúde salvo com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'custom-snackbar',
        });
        this.modal.close('Close click');
        this.recarregarComponente();
      },
      error: () =>{
        this.Error('Erro na criação da Unidade de Saúde')
      }
    })
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
      panelClass:'custom-snackbar',
    });
  }
}
