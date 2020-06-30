import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlbumService } from '../service/album.service';
import { Album } from './../service/models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumForm: FormGroup;

  albuns: Album[];

  album: Album;

  show: boolean = false;

  constructor(private albumService: AlbumService, private fb: FormBuilder) { }

  ngOnInit()  {

    this.createForm();
    this.listar();
  }

  salvar(){
    this.albumService.salvar(this.album).subscribe(resp => {
      this.album = resp;
      this.listar();
    });
  }

  listar(){
    this.albumService.listar().subscribe(resp => this.albuns = resp);
    this.show = true;
  }

  excluir(idAlbum: number){
    this.albumService.excluir(idAlbum).subscribe(resp => {
      console.log(resp);
      this.listar;
    })
  }

  createForm(){
    this.albumForm = this.fb.group({
      'nome': new FormControl,
      'ano': new FormControl,
      'banda': new FormControl
    })
  }
}
