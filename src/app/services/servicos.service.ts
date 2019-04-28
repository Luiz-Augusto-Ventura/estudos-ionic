import { Injectable } from '@angular/core';
import { Pagamento } from '../pagamento';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
    
  pagamentos: Pagamento[] = [
    {codigo: 10001, entrada: {hours: 13, minutes: 30}, saida: {hours: 14, minutes: 35} },
    {codigo: 10002, entrada: {hours: 14, minutes: 40}, saida: {hours: 17, minutes: 5 } },
    {codigo: 10003, entrada: {hours: 12, minutes: 30}, saida: {hours: 15, minutes: 0 } }
  ];

  constructor() { 
    const valorHora = 5;
  }

  getListaPagamentos() {
    return this.pagamentos;
  }

  setPagamento(pagamento: Pagamento): boolean {
    if (!(this.pagamentos.find(p => p.codigo == pagamento.codigo)))
    {
      this.pagamentos.push(pagamento);
      return true;
    }
    else
      return false;
  }

  calcularPreco(e: Time, s: Time): number {
    if ((e.hours > s.hours) || ((e.hours == s.hours) && (e.minutes == s.minutes)))
      return 0;

    let diff: Time = {hours: 0, minutes: 0};
    let valor = 5;

    console.log("Entrada: " + e.hours + ":" + e.minutes + " // Saída: " + s.hours + ":" + s.minutes);
    //console.log("Entrada: " + e + " // Saída: " + s);

    if (e.minutes > s.minutes) {
      diff.minutes = (s.minutes + 60) - e.minutes;
      diff.hours = (s.hours - e.hours) - 1;
    }
    else {
      diff.minutes = s.minutes - e.minutes;
      diff.hours = s.hours - e.hours;
    }

    if (diff.minutes < 30) {
        if (diff.hours <= 0) {
          console.log("Valor: " + valor);
          return valor;
        }
        else {
          valor = diff.hours * 5;
          console.log("Valor: " + valor);
          return valor;
        }
    }
    else {
      valor = (diff.hours + 1) * 5;
      console.log("Valor: " + valor);
      return valor;
    }
    
 
    /* código mais limpo, eliminiaria um if e um else
    if(valor <= 0) {
      valor = 5
    } 
    return valor;
    */
  }
}
