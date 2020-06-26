import { Component, OnInit } from '@angular/core';

import { BandaService } from './../service/banda.service';
import { Banda } from '../service/models/Banda';



@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  banda = new Banda();

  bandas: Banda[];



  constructor(private bandaService: BandaService) { }

  ngOnInit() {

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
  }
}


