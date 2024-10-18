import { Component, Input } from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  styleUrls: ['./ejercicio6.component.css']
})
export class Ejercicio6Component {
  // Atributos que serán recibidos desde el padre a través de @Input()
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
}
