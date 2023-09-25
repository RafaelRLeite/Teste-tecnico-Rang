import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicoService } from 'src/app/services/medico.service';
import { Router } from '@angular/router';
import { UnidadeSaude } from 'src/app/models/unidade-saude';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-criar-medico',
  templateUrl: './modal-criar-medico.component.html',
  styleUrls: ['./modal-criar-medico.component.css']
})
export class ModalCriarMedicoComponent implements OnInit {
  id!: number;
  medicoForm!: FormGroup;
  listaUnidadeSaude: UnidadeSaude[] = [];
  unidadeId!: number

  constructor(
    public modal: NgbActiveModal,
    private service: MedicoService,
    private unidadeSaudeService: UnidadeSaudeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.getAll();

    this.medicoForm = this.formBuilder.group({
      tx_nome: ['', Validators.required],
      nr_cpf: ['', Validators.required],
      nr_crm: ['', Validators.required],
      tx_especialidade: ['', Validators.required],
      unidade_saude: ['', Validators.required]
    });
  }

  save(){
    this.service.save(this.medicoForm.value).subscribe({
      next: () =>{
        this._snackBar.open('Médico salvo com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: 'custom-snackbar',
        });
        this.modal.close('Close click');
        this.recarregarComponente();
      },
      error: () =>{
        this.Error('Erro na criação do Médico')
      }
    })
  }

  getAll() {
    this.unidadeSaudeService.getAll().subscribe((data) => {
      this.listaUnidadeSaude = data;
    });
  }

  recarregarComponente() {
    setTimeout(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/listarMedico']);
      });
    }, 1000);
  }

  validarNumero(event: KeyboardEvent): boolean {
    let contador = 0;
    const codigoTecla = event.key;
    if (/[0-9]/.test(codigoTecla) || codigoTecla === 'Tab') {
      contador = 0;
      return true;
    }
    else if (codigoTecla === 'Backspace' || codigoTecla === 'Tab') {
      contador = 1;
      return true;
    }
    return false;
  }

  private Error(message: string): void {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass:'custom-snackbar',
    });
  }
}
