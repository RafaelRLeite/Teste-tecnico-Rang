import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../models/medico';
import { Observable } from 'rxjs';
import { Page } from '../models/page';
import { UnidadeSaude } from '../models/unidade-saude';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly API = `http://54.173.26.146:8080/medico`;

  constructor(private http: HttpClient) { }

  getAll():Observable<Medico[]>{
    return this.http.get<Medico[]>(this.API);
  }

  getPaginateAll(currentPageNumber: number, pageSize: number): Observable<Page> {
    return this.http.get<Page>(`${this.API}/paginate?page=${currentPageNumber}&size=${pageSize}`);
  }

  getById(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.API}/${id}`);
  }

  getUnidadeSaudeByMedicoId(id: number): Observable<UnidadeSaude> {
    return this.http.get<UnidadeSaude>(`${this.API}/unidade-saude/${id}`);
  }

  save(medico: Medico): Observable<HttpResponse<Medico>> {
    const novoMedico: Medico = {
      tx_nome: medico.tx_nome,
      nr_cpf: this.formatCPF(medico.nr_cpf),
      nr_crm: medico.nr_crm,
      tx_especialidade: medico.tx_especialidade,
      dt_criacao_medico: this.formatCurrentDateTime(),
      unidade_saude: medico.unidade_saude
    };
    return this.http.post<Medico>(this.API, novoMedico, {observe: 'response'});
  }

  update(id:number, medico:Medico): Observable<HttpResponse<Medico>> {
    const updateMedico: Medico = {
      tx_nome: medico.tx_nome,
      nr_cpf: this.formatCPF(medico.nr_cpf),
      nr_crm: medico.nr_crm,
      tx_especialidade: medico.tx_especialidade,
      dt_criacao_medico: this.formatCurrentDateTime(),
      unidade_saude: medico.unidade_saude
    };
    return this.http.put<Medico>(`${this.API}/${id}`, updateMedico, {observe: 'response'});
  }

  delete(id:number): Observable<HttpResponse<Object>>{
    return this.http.delete(`${this.API}/${id}`, { observe: 'response' });
  }

  private formatCurrentDateTime(): string {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  private formatCPF(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
  }

}
