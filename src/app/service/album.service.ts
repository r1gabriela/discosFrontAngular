import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album } from './models/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  SALVAR = 'http://localhost:8080/meusCds/apirest/album/salvar';
  LISTAR = 'http://localhost:8080/meusCds/apirest/album/listar';
  EXCLUIR = 'http://localhost:8080/meusCds/apirest/album/excluir';

  constructor(private http: HttpClient) { }

  salvar(album: Album): Observable<Album> {
    return this.http.post<Album>(this.SALVAR, album);
  }

  listar(){
    return this.http.get<Album[]>(this.LISTAR);
  }

  excluir(idAlbum){
    return this.http.delete(this.EXCLUIR,{
      params: new HttpParams().set('idAlbum', idAlbum)
    })
  }
}
