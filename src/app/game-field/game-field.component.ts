import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit {

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
  }
  getStyling(row: number, col: number) {
    if ((row + col) % 2) {
      return 'white';
    } else {
      return 'black';
    }
  }


  onTileClick(tile: any) {
    console.log(tile)
  }

}
