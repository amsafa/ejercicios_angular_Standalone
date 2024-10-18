import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component {
  num1: number = 0;
  num2: number = 0;
  result: number | string = 0;

  sumar() {
    this.result = this.num1 + this.num2;
  }

  restar() {
    this.result = this.num1 - this.num2;
  }

  multiplicar() {
    this.result = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 !== 0) {
      this.result = this.num1 / this.num2;
    } else {
      this.result = 'Error: División por cero';
    }
  }

  raizCuadrada() {
    this.result = Math.sqrt(this.num1);
  }
}
