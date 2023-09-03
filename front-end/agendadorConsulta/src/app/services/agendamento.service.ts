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

  getPaginateAll(currentPage: number, pageSize: number): Observable<Page> {
    return this.http.get<Page>(
      `${this.API}/paginate?page=${currentPage}&size=${pageSize}`
    );
  }
}
