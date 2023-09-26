import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-modal-criar-endereco',
  templateUrl: './modal-criar-endereco.component.html',
  styleUrls: ['./modal-criar-endereco.component.css']
})
export class ModalCriarEnderecoComponent implements OnInit  {
  id!: number;
  enderecoForm!: FormGroup;

  constructor(
    public modal: NgbActiveModal,
    private service: EnderecoService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.enderecoForm = this.formBuilder.group({
      nr_cep: ['', Validators.required],
      tx_bairro: ['', Validators.required],
      tx_complemento: [''],
      tx_localidade: ['', Validators.required],
      tx_logradouro: ['', Validators.required],
      tx_uf: ['', Validators.required],
      long_unidade_saude: [null],
      long_medico: [this.id]
    });
  }

  save() {
    console.table(this.enderecoForm.value);
    this.service.save(this.enderecoForm.value).subscribe({
      next: () => {
        this._snackBar.open('Endereço Salvo com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass:'custom-snackbar',
        });
        this.modal.close('Close click');
        this.recarregarComponente();
      },
      error: () => {
        this._snackBar.open('Erro no salvamento do Endereço', 'Fechar', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass:'custom-snackbar',
        });
      },
    });
  }

  recarregarComponente() {
    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/listarMedico']);
      });
    }, 1000);
  }
}
