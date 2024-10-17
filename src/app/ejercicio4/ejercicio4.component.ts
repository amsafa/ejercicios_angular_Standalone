import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component {
  tiempo: number = 0;
  tiempoRestante: number = 0;
  intervalo: any;

  iniciarTemporizador() {
    this.detenerTemporizador(); // Detener cualquier temporizador en ejecución
    this.tiempoRestante = this.tiempo;
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        this.detenerTemporizador();
      }
    }, 1000);
  }

  detenerTemporizador() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}
