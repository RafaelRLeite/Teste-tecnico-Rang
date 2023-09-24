import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-modal-excluir-endereco',
  templateUrl: './modal-excluir-endereco.component.html',
  styleUrls: ['./modal-excluir-endereco.component.css']
})
export class ModalExcluirEnderecoComponent implements OnInit {
  id!: number;

  constructor(
    private service: EnderecoService,
    public modal: NgbActiveModal,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  excluir() {
    this.service.delete(this.id).subscribe({
      next: () => {
        this.modal.close('Close click');
        this._snackBar.open('Endereço excluido com sucesso!', 'Fechar', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass:'custom-snackbar',
        });
        this.recarregarComponente()
      },
      error: () => {
        this._snackBar.open('Ocorreu um erro na exclusão do Endereço!','Fechar', {
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
