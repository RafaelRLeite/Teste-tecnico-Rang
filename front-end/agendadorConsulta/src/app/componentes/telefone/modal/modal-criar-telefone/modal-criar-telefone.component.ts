import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TelefoneService } from 'src/app/services/telefone.service';

@Component({
  selector: 'app-modal-criar-telefone',
  templateUrl: './modal-criar-telefone.component.html',
  styleUrls: ['./modal-criar-telefone.component.css'],
})
export class ModalCriarTelefoneComponent implements OnInit {
  id!: number;
  telefoneForm!: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private service: TelefoneService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.telefoneForm = this.formBuilder.group({
      nr_ddd_celular: ['', Validators.required],
      nr_celular: ['', Validators.required],
      nr_ddd_telefone: ['', Validators.required],
      nr_telefone: ['', Validators.required],
      long_unidade_saude: [null],
      long_medico: [null],
    });
    this.validarEntity();
  }

  save() {
    this.service.save(this.telefoneForm.value).subscribe({
      next: () => {
        this._snackBar.open('Telefone Salvo com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'custom-snackbar',
        });
        this.modal.close('Close click');
        this.recarregarComponente();
      },
      error: () => {
        this._snackBar.open('Erro no salvamento do Telefone', 'Fechar', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: 'custom-snackbar',
        });
      },
    });
  }

  private recarregarComponente() {
    const urlAtual = this.router.url;
    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([urlAtual]);
      });
    }, 1000);
  }

  private validarEntity() {
    const url = this.router.url;
    if (url === '/listarMedico') {
      this.telefoneForm.patchValue({
        long_medico: this.id,
      });
    } else {
      this.telefoneForm.patchValue({
        long_unidade_saude: this.id,
      });
    }
  }
}
