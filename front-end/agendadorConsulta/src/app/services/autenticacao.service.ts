import { Observable, map, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Autenticacao,
  AutenticacaoResponse,
  Registro,
  User,
} from '../models/autenticacao';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {

  private readonly API = `http://localhost:8080/auth`;

  private subjectUsuario: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjectLogin: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router,) {}

  login(autenticacao: Autenticacao): Observable<AutenticacaoResponse> {
    return this.http.post<AutenticacaoResponse>(`${this.API}/login`, autenticacao).pipe(
     map((resposta) => {
      sessionStorage.setItem('token', resposta.token);
      this.subjectUsuario.next(resposta.user);
      this.subjectLogin.next(true);
      return resposta;
     }),
    )
  }

  logout(){
    sessionStorage.removeItem('token');
    this.subjectUsuario.next(null);
    this.subjectLogin.next(false);
    this.router.navigate(['home']);
  }

  usuarioLogado(): Observable<any>{
    const token = sessionStorage.getItem('token');
    if(token){
      this.subjectLogin.next(true);
    }
    return this.subjectLogin.asObservable();
  }

  obterUsuario(): Observable<string> {
    return this.subjectUsuario.pipe(
      map((usuario) => {
        if (usuario && usuario.role) {
          return usuario.role;
        }
        return '';
      })
    );
  }

  registrar(registro: Registro): Observable<HttpResponse<String>> {
    return this.http.post<String>(`${this.API}/register`, registro, {observe:'response'});
  }

}
