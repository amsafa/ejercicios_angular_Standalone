import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {

  componente1: string = '';

  constructor() {
    this.generarComponente1();
  }

  generarComponente1() {
    const hora = new Date().getHours();
    if (hora < 12) {
      this.componente1 = 'Buenos días';
    } else if (hora < 20) {
      this.componente1 = 'Buenas tardes';
    } else {
      this.componente1 = 'Buenas noches';
    }
  }

}
