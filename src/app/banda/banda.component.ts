import { Component, OnInit } from '@angular/core';

import { BandaService } from './../service/banda.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Banda } from '../service/models/Banda';




@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  bandaForm:FormGroup;

  show: boolean = false;

  banda = new Banda();

  bandas: Banda[];



  constructor(private bandaService: BandaService, private fb:FormBuilder) { }

  ngOnInit() {

    this.createForm();
    this.listar();

  }

  salvar() {
    this.bandaService.salvar(this.banda).subscribe(resp => {
      this.banda = resp;
      this.listar();
    }),
      (error) => {
        this.listar();
        console.log(error.error);
  }
    
}
  listar() {
    this.bandaService.listar().subscribe(bandas => this.bandas = bandas);
    this.show = true;
  }

  excluir(idBanda: number){
    debugger
    this.bandaService.excluir(idBanda).subscribe(resp => {
      console.log(resp);
      this.listar();
    });     
  }

  createForm(){
    this.bandaForm = this.fb.group({
      'nome': new FormControl,
      'genero': new FormControl
    });
  }
}


