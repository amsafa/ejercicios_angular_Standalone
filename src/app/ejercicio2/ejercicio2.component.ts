import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  standalone: true,
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit, OnDestroy {
  horaActual: string = '';
  private intervalo: any;

  ngOnInit() {
    this.iniciarEjer2();
  }

  iniciarEjer2() {
    this.actualizarHora();
    this.intervalo = setInterval(() => {
      this.actualizarHora();
    }, 1000);
  }

  actualizarHora() {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString();
  }

  detenerReloj() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  ngOnDestroy() {
    this.detenerReloj();
  }
}
