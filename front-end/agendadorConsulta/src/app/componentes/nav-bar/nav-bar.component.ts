import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loginForm!: FormGroup;
  @ViewChild('meuBotao') meuBotao!: ElementRef;
  estaLogado: boolean = false;
  esconder = true;

  constructor(
    private service: AutenticacaoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.service.usuarioLogado().subscribe((estaLogado) => {
      this.estaLogado = estaLogado;
    });
  }

  login() {
    this.service.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response?.user) {
          this.router.navigate(['criarAgendamento']);
          this.meuBotao.nativeElement.click();
          this._snackBar.open('Bem vindo!', 'Fechar', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass:'custom-snackbar',
          })
        }
      },
      error: () =>
        this._snackBar.open('Ocorreu um erro no Login', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass:'custom-snackbar',
        })
    });
  }

  logout() {
    this.service.logout();
  }
}
