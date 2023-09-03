import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Agendamento } from 'src/app/model/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-listar-agendamentos',
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.css'],
})
export class ListarAgendamentosComponent implements OnInit {
  listaAgendamentos: Agendamento[] = [];
  totalCount: number = 0;
  currentPageNumber: number = 0;
  pageSize: number = 6;

  constructor(private service: AgendamentoService) {}

  ngOnInit(): void {
    this.service.getPaginateAll(this.currentPageNumber, this.pageSize).subscribe((response) => {
      this.listaAgendamentos = response.content as Agendamento[];
    });
  }

  get() {
    this.service.getPaginateAll(this.currentPageNumber, this.pageSize).subscribe((response) => {
      this.listaAgendamentos = response.content as Agendamento[];
      this.totalCount = response.totalElements
        ? Number(response.totalElements)
        : 0;
    });
  }

  handlePageEvent(e:PageEvent){
    this.currentPageNumber = e.pageIndex + 1;
    this.pageSize = e.pageSize
  }
}
