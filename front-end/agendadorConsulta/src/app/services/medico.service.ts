import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../model/medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly API = `http://localhost:8080/medico`;

  constructor(private http: HttpClient) { }

  getAll():Observable<Medico[]>{
    return this.http.get<Medico[]>(this.API);
  }
}
