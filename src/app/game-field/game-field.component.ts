import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  king_white: any;
  A1: any;
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
    this.filterElement()
  }
  createPieces() {
    this.king_white = new King('assets/img/king_white.png', 'D1')
    console.log(this.king_white)

  }
  filterElement() {
    let startTileForKingWhite = this.allFields.filter((tile: ElementRef) => {
      return tile.nativeElement.id == this.king_white.fieldNow;

    })
    console.log(startTileForKingWhite)
    this.A1 = this.king_white.img;
    console.log(this.A1)
  }

  checkSource(column: string, row: number) {
    let id: string | number = column + row;
    if (this.king_white.fieldNow == id) {
      return 'assets/img/king_white.png'
    }
    else {
      return '';
    }

  }
}
