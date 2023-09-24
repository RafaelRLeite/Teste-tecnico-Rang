import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/models/medico';
import { UnidadeSaude } from 'src/app/models/unidade-saude';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';
import { DateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-criar-agendamento',
  templateUrl: './criar-agendamento.component.html',
  styleUrls: ['./criar-agendamento.component.css'],
})
export class CriarAgendamentoComponent implements OnInit {
  agendamentoForm!: FormGroup;
  listaUnidadeSaude: UnidadeSaude[] = [];
  listaMedico: Medico[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private unidadeSaudeService: UnidadeSaudeService,
    private service: AgendamentoService,
    private router: Router,
    private dateAdapter: DateAdapter<Date>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dateAdapter.setLocale('pt-br');
    this.getAll();

    this.agendamentoForm = this.formBuilder.group({
      dtMarcacaoControl: [ null, Validators.required],
      hrMarcacaoControl: [ null, Validators.required],
      medico: [null, Validators.required],
    });
  }

  getAll() {
    this.unidadeSaudeService.getAll().subscribe((data) => {
      this.listaUnidadeSaude = data;
    });
  }

  /*
    Requisição post com header Authorization: token para poder consumir o método. Esse método é utiliza se não
    existir um interceptor
  */
  /* createrAgendamentoToken() {
    const token = sessionStorage.getItem('token');
    const httpHeader = new HttpHeaders();
    if(token){
      httpHeader.append('Authorization' , token);
    }
    this.agendamentoService.createAgendamentoToken(this.agendamentoForm.value, httpHeader).subscribe(() => {
      this.router.navigate(['/listarAgendamento'])
    });
  } */

  createrAgendamento() {
    this.service.createAgendamento(this.agendamentoForm.value).subscribe({
      next: (response) => {
        if(response.status === 201){
          this.router.navigate(['/listarAgendamento']);
          this._snackBar.open('Consulta marcada com sucesso', 'Fechar', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass:'custom-snackbar',
          });
        }
      },
      error: (response) => {
        if(response.status === 409){
        this._snackBar.open('Já existe uma consulta marcada para o mesmo horário', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass:'custom-snackbar',
        });
        } else {
          this._snackBar.open('Ocorreu um erro na marcação da consulta', 'Fechar', {
            duration: 5000,
            verticalPosition: 'top',
          panelClass:'custom-snackbar',
          });
        }
      },
    });
  }
}
