import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options } from '../constant';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  public customOptions: OwlOptions = options;

  works = [
    { client: 'Etnica Eco-Friendly', typeWork: 'Landing Page Administrable', image: 'assets/img/etnica-project.png' },
    { client: 'Pendiente de subir', typeWork: 'Descripción pendiente', image: 'assets/img/popup-project-2.jpg' },
    { client: 'Pendiente de subir', typeWork: 'Descripción pendiente', image: 'assets/img/popup-project-2.jpg' },
    { client: 'Pendiente de subir', typeWork: 'Descripción pendiente', image: 'assets/img/popup-project-2.jpg' },
    { client: 'Pendiente de subir', typeWork: 'Descripción pendiente', image: 'assets/img/popup-project-2.jpg' },
  ]

}
