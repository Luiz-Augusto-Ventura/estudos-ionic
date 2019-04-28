import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  pagamentos = this.servicos.getListaPagamentos();
  
  constructor(private servicos: ServicosService) { }

  ngOnInit(
  ) {}
  

  calculaTotal(entrada: Time, saida: Time) {
    return this.servicos.calcularPreco(entrada, saida);
  }  

  teste() {
    return "10 conto";
  }
}
