import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = sessionStorage.getItem('token');
    let requestClone;

    if(token){
      requestClone = request.clone({
        setHeaders: {
          Authorization : token
        }
      });
    }else{
      requestClone = request;
    }

    return next.handle(requestClone);
  }
}
