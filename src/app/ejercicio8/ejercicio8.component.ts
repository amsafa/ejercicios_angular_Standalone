import { Component } from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';

interface Articulo {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.component.html',
  standalone: true,
  imports: [
    CommonModule, NgClass
  ],
  styleUrls: ['./ejercicio8.component.css']
})
export class Ejercicio8Component {
  articulos: Articulo[] = [
    { nombre: 'Artículo 1', precio: 10, cantidad: 0 },
    { nombre: 'Artículo 2', precio: 20, cantidad: 0 },
    { nombre: 'Artículo 3', precio: 30, cantidad: 0 }
  ];

  incrementarCantidad(articulo: Articulo) {
    articulo.cantidad++;
  }

  decrementarCantidad(articulo: Articulo) {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
    }
  }

  get total() {
    return this.articulos.reduce((acc, articulo) => acc + (articulo.precio * articulo.cantidad), 0);
  }
}
