import { Component } from "@angular/core";


@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>base: {{ base }}</h3>

    <button (click)="acumular(+base)">+{{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Counter app';
  number: number = 10;
  base: number = 5;

  acumular = (valor: number) => {
    this.number += valor;
  };
}
