import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Banda } from './models/Banda';


@Injectable({
  providedIn: 'root'
})
export class BandaService {

   SALVAR = 'http://localhost:8080/meusCds/apirest/banda/salvar';
   LISTAR = 'http://localhost:8080/meusCds/apirest/banda/listar';
   EXCLUIR = 'http://localhost:8080/meusCds/apirest/banda/excluir';
  

  constructor(private http: HttpClient) { }

  salvar(banda: Banda): Observable<Banda> {
    return this.http.post<Banda>(this.SALVAR, banda).pipe(catchError(this.handleError));
  }

  listar(){
    return this.http.get<Banda[]>(this.LISTAR);
  } 

  excluir(idBanda) {
    debugger
    return this.http.delete(this.EXCLUIR,{
       params: new HttpParams().set('idBanda', idBanda)});

  }

  handleError(error: HttpErrorResponse){
    return throwError(console.log(error.error));
  }
  
}
