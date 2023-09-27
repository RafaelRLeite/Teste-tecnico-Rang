import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TelefoneService } from 'src/app/services/telefone.service';

@Component({
  selector: 'app-modal-excluir-telefone',
  templateUrl: './modal-excluir-telefone.component.html',
  styleUrls: ['./modal-excluir-telefone.component.css'],
})
export class ModalExcluirTelefoneComponent implements OnInit {
  id!: number;

  constructor(
    private service: TelefoneService,
    public modal: NgbActiveModal,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  excluir() {
    this.service.delete(this.id).subscribe({
      next: () => {
        this.modal.close('Close click');
        this._snackBar.open('Telefone excluido com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'custom-snackbar',
        });
        this.recarregarComponente()
      },
      error: () => {
        this._snackBar.open('Ocorreu um erro na exclusão do Telefone!','Fechar', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass: 'custom-snackbar',
          }
        );
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
}
