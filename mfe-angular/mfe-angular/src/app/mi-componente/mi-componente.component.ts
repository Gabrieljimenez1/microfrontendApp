import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {

  edad: number;
  nombres:Array<string>;

  constructor( ) {
    this.edad = 20;
    this.nombres = ['Juan Jose', 'Gabriel', 'Tomas', 'Daniel', 'Carlos'];
   } 

  ngOnInit(): void {
    console.log('Componente mi-componente cargado');
  }

  aumentarEdad() {
    this.edad++;
  }

  disminuirEdad() {
    this.edad--;
  } 
  
}
