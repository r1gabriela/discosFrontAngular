import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banda } from './models/banda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  SALVAR = 'http://localhost:8080/meusCds/apirest/banda/salvar';
  listar = 'http://localhost:8080/meusCds/apirest/banda/listar';
  excluir = 'http://localhost:8080/meusCds/apirest/banda/excluir';
  

  constructor(private http: HttpClient) { }

  salvar = async(banda: Banda => 
    return this.http.post<Banda>(this.salvar, banda)
  })
    return this.http.post<Banda>(this.salvar, banda);
    
  }
}
