import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  getName(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(): string {
    return this.nombre.toLocaleUpperCase();
  }

  changeName(): void {
    this.nombre = 'Spiderman';
  }
  changeEdad(): void {
    this.edad = 30;
  }
}
