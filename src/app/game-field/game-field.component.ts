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
    this.newGameField();
  }
  //set new game field pieces
  newGameField() {

  }
  // set the correct field color
  getStyling(row: number, col: number) {
    if ((row + col) % 2) {
      return 'lightbrown';
    } else {
      return 'lightgrey';
    }
  }

  // if tile gets clicked, get the current piece and math the possible movement
  onTileClick(column: string, row: number) {
    console.log(column, row)
  }

}
