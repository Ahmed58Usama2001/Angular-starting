import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imgspahts: string[] = ['../../../assets/cabin.png',
    './assets/cake.png',
    './assets/circus.png',
    './assets/game.png',
    './assets/safe.png',
    './assets/submarine.png']

}
