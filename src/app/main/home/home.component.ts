import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { typeoptions } from '../constant';
import { FileUtil } from 'src/app/utils/file.util';
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
    FileUtil.download('CV_Luis_Simon_Martinez.pdf', 'assets/files/CV-LSM.pdf');
  }
}
