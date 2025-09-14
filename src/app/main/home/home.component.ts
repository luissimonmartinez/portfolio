import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { typeoptions } from '../constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text: string = 'Frontend Architect | Angular Expert';

  ngOnInit(): void {
    const typed = new Typed('.typed-element', typeoptions);
  }

  downloadCV(): void {
    // La ruta al archivo CV. Asegúrate de que el archivo exista en esta ruta dentro de la carpeta 'assets'.
    const cvUrl = 'assets/files/CV-LSM.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Luis_Simon_Martinez.pdf'; // El nombre que tendrá el archivo al ser descargado.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
