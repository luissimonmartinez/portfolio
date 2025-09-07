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
}
