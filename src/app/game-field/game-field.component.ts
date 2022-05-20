import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { King } from '../models/king.class';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit, AfterViewInit {
  @ViewChildren('id') id: any;
  allFields: any;
  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.newGameField();

    this.createPieces();
  }

  ngAfterViewInit() {
    this.pushAllFields();
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
    console.log(this.id['_results'])
  }
  pushAllFields() {
    this.allFields = this.id['_results'];
    console.log(this.allFields)
  }
  createPieces() {
    let king_white = new King('king_white', 'A1')
    console.log(king_white)
  }

}
