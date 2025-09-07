import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options2 } from '../constant';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesStore!: any[];
  public customOptions2: OwlOptions = options2;
  ngOnInit(): void {
    this.slidesStore = [
      {
        id: 1,
        src: "assets/img/brand-angular.svg",
        alt: "angular",
        title: "angular",
      },
      {
        id: 2,
        src: "assets/img/brand-firebase.svg",
        alt: "firebase",
        title: "firebase",
      },
      {
        id: 3,
        src: "assets/img/brand-ionic.svg",
        alt: "ionic",
        title: "ionic",
      },
      {
        id: 4,
        src: "assets/img/brand-github.svg",
        alt: "github",
        title: "github",
      },
      {
        id: 5,
        src: "assets/img/brand-azure.svg",
        alt: "azure",
        title: "azure",
      },
      {
        id: 5,
        src: "assets/img/brand-sonar.svg",
        alt: "sonar",
        title: "sonar",
      }
    ];
  }
}
