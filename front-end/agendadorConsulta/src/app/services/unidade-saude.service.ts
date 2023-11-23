import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeSaude } from '../models/unidade-saude';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class UnidadeSaudeService {
  private readonly API = `http://localhost:8080/unidade-saude`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<UnidadeSaude[]> {
    return this.http.get<UnidadeSaude[]>(`${this.API}`);
  }

  getPaginateAll(currentPageNumber: number, pageSize: number): Observable<Page> {
    return this.http.get<Page>(`${this.API}/paginate?page=${currentPageNumber}&size=${pageSize}`);
  }

  getById(id: number): Observable<UnidadeSaude> {
    return this.http.get<UnidadeSaude>(`${this.API}/${id}`);
  }

  save(unidadeSaude: UnidadeSaude): Observable<HttpResponse<UnidadeSaude>> {
    const novaUnidadeSaude: UnidadeSaude = {
      tx_razao_social: unidadeSaude.tx_razao_social,
      tx_nome_fantasia: unidadeSaude.tx_nome_fantasia,
      nr_cnpj: this.formatCNPJ(unidadeSaude.nr_cnpj),
      dt_abertura: this.formatDate(unidadeSaude.dt_abertura),
      dt_criacao_unidade_saude: this.formatCurrentDateTime(),
    }
    return this.http.post<UnidadeSaude>(this.API, novaUnidadeSaude, {observe: 'response'});
  }

  update(id:number, unidadeSaude:UnidadeSaude): Observable<HttpResponse<UnidadeSaude>> {
    return this.http.put<UnidadeSaude>(`${this.API}/${id}`, unidadeSaude, {observe: 'response'});
  }

  delete(id:number): Observable<HttpResponse<Object>>{
    return this.http.delete(`${this.API}/${id}`, { observe: 'response' });
  }

  private formatCurrentDateTime(): string {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  private formatDate(date: string | undefined): string {
    if (date != undefined) {
      const aux = new Date(date);
      const ano = aux.getFullYear();
      const mes = String(aux.getMonth() + 1).padStart(2, '0');
      const dia = String(aux.getDate()).padStart(2, '0');
      return `${ano}-${mes}-${dia}`;
    }
    return '';
  }

  private formatCNPJ(cnpj: string): string {
    cnpj = cnpj.replace(/\D/g, '');
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return cnpj;
  }
}
