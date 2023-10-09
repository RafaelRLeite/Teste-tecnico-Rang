import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Telefone } from '../models/telefone';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  private readonly API = `http://54.173.26.146:8080/telefone`;

  constructor(private http: HttpClient) { }

  save(telefone: Telefone): Observable<Telefone>{
    return this.http.post<Telefone>(`${this.API}/to-list`, telefone);
  }

  delete(id: number): Observable<HttpResponse<Object>> {
    return this.http.delete(`${this.API}/${id}`, {observe: 'response'});
  }
}
