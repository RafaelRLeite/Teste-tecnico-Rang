import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeSaude } from '../model/unidade-saude';

@Injectable({
  providedIn: 'root',
})
export class UnidadeSaudeService {
  private readonly API = `http://localhost:8080/unidade-saude`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<UnidadeSaude[]> {
    return this.http.get<UnidadeSaude[]>(`${this.API}`);
  }
}
