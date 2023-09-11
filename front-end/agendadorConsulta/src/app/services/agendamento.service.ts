import { Agendamento } from 'src/app/model/agendamento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private readonly API = `http://localhost:8080/agendamento`;

  constructor(private http: HttpClient) {}

  getPaginateAll(currentPageNumber: number, pageSize: number): Observable<Page> {
    return this.http.get<Page>(`${this.API}/paginate?page=${currentPageNumber}&size=${pageSize}`);
  }

  getById(id: number): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.API}/${id}`);
  }

  createAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    const novoAgendamento: Agendamento = {
      dt_marcacao: this.formatDateTimeAndConcat(
        agendamento.dtMarcacaoControl,
        agendamento.hrMarcacaoControl
      ),
      status: '0',
      dt_criacao_agendamento: this.formatCurrentDateTime(),
      medico: agendamento.medico
    };
    return this.http.post<Agendamento>(this.API, novoAgendamento);
  }

  updateAgendamento(id: number, agendamento: Agendamento): Observable<Agendamento> {
    const novoAgendamento: Agendamento = {
      dt_marcacao: agendamento.dtMarcacaoControl + ' ' + agendamento.hrMarcacaoControl,
      status: '2',
      dt_criacao_agendamento: this.formatCurrentDateTime(),
      medico: agendamento.medico
    };
    return this.http.put<Agendamento>(`${this.API}/${id}`, novoAgendamento);
  }

  delete(id:number): Observable<Agendamento>{
    return this.http.delete<Agendamento>(`${this.API}/${id}`);
  }

  private formatCurrentDateTime(): string {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  private formatDateTimeAndConcat(date: Date | undefined, hora: string | undefined): string {
    if (date != undefined && hora != undefined) {
      const ano = date.getFullYear();
      const mes = String(date.getMonth() + 1).padStart(2, '0');
      const dia = String(date.getDate()).padStart(2, '0');
      return `${ano}-${mes}-${dia} ${hora}`;
    }
    return '';
  }
}
