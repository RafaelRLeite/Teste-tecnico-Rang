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
  totalCount!: number;
  currentPageNumber: number = 0;
  pageSize: number = 3;

  constructor(private service: AgendamentoService) {}

  ngOnInit(): void {
    this.getPaginateAll(this.currentPageNumber, this.pageSize);
  }

  getPaginateAll(currentPageNumber: number, pageSize: number) {
    this.service
      .getPaginateAll(currentPageNumber, pageSize)
      .subscribe((response) => {
        this.listaAgendamentos = response.content as Agendamento[];
        this.totalCount = response.totalElements
          ? Number(response.totalElements)
          : 0;
      });
  }

  onPageChange(event: PageEvent) {
    this.getPaginateAll(event.pageIndex, event.pageSize);
  }
}
