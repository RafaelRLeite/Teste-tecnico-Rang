import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-modal-excluir-medico',
  templateUrl: './modal-excluir-medico.component.html',
  styleUrls: ['./modal-excluir-medico.component.css'],
})
export class ModalExcluirMedicoComponent implements OnInit {
  id!: number;

  constructor(
    private service: MedicoService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    /*   this.getById(); */
  }

  /* getById() {
    this.service.getById(this.id).subscribe((response) => {
      if (response.id !== undefined) {
        this.id = response.id;
      }
    });
  } */

  excluir() {
    return this.service.delete(this.id).subscribe({
      next: (response) => {
        if (response.status === 200) {
          this._snackBar.open('Médico excluido com sucesso!', 'Fechar', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass: 'custom-snackbar',
          });
          this.modal.close('Close click');
          this.recarregarComponente();
        }
      },
      error: () => {
        this._snackBar.open('Ocorreu um erro na exclusão do Médico!', 'Fechar', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass: 'custom-snackbar',
          }
        );
      }
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
