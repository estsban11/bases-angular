import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes: string[] = ['spiderman', 'hulk', 'thor'];
  heroeBorrado: string = '';

  deleteHero() {
     this.heroeBorrado = this.heroes.shift() || '';
  }


}
