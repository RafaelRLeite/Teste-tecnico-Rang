import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Medico } from 'src/app/model/medico';
import { UnidadeSaude } from 'src/app/model/unidade-saude';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { UnidadeSaudeService } from 'src/app/services/unidade-saude.service';
import { DateAdapter } from '@angular/material/core';

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
    private agendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private dateAdapter: DateAdapter<Date>
  ) {}

  ngOnInit(): void {
    this.dateAdapter.setLocale('pt-br');
    this.getAll();

    this.agendamentoForm = this.formBuilder.group({
      dtMarcacaoControl: ['', Validators.required],
      hrMarcacaoControl: ['', Validators.required],
      medico: ['', Validators.required]
    });
  }

  getAll() {
    this.unidadeSaudeService.getAll().subscribe((data) => {
      this.listaUnidadeSaude = data;
    });
  }

  createrAgendamento() {
    this.agendamentoService.createAgendamento(this.agendamentoForm.value).subscribe(() => {
      this.router.navigate(['/listarAgendamento'])
    });
  }
}
