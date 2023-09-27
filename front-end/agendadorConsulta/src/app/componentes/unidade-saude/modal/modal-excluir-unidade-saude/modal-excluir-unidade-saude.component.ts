import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';

@Component({
  selector: 'app-modal-excluir-unidade-saude',
  templateUrl: './modal-excluir-unidade-saude.component.html',
  styleUrls: ['./modal-excluir-unidade-saude.component.css']
})
export class ModalExcluirUnidadeSaudeComponent implements OnInit {
id!:number;

  constructor(
    private service: UnidadeSaudeService,
    public modal: NgbActiveModal,
    private router: Router,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {}

  excluir() {
    this.service.delete(this.id).subscribe({
      next: () => {
        this.modal.close('Close click');
        this._snackBar.open('Unidade de Saúde excluida com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'custom-snackbar',
        });
        this.recarregarComponente()
      },
      error: () => {
        this._snackBar.open('Ocorreu um erro na exclusão da Unidade de Saúde!','Fechar', {
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
