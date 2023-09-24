import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private readonly API = `http://localhost:8080/endereco`;

  constructor(private http: HttpClient) { }

  save(endereco: Endereco): Observable<Endereco>{
    console.table(endereco);
    return this.http.post<Endereco>(`${this.API}/to-list`, endereco);
  }

  delete(id: number): Observable<HttpResponse<Object>> {
    return this.http.delete(`${this.API}/${id}`, {observe: 'response'});
  }
}
