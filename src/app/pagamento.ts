import { Time, DatePipe } from '@angular/common';

export class Pagamento {
    codigo: number;
    entrada: Time;
    saida: Time;

    constructor(c: number, e: Time, s: Time) {
        this.codigo = c;
        this.entrada = e;
        this.saida = s;
    }
}