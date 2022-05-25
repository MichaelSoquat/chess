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


  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.newGameField();

    this.service.createPieces();
  }
  moveThere:any = '';
  currentPiece: any;
  firstClick = true;
  ngAfterViewInit() {
    this.pushAllFields();
  }
  //set new game field pieces
  newGameField() {

  }

  pushAllFields() {
    this.service.allFields = this.id['_results'];
    console.log(this.service.allFields)
    this.service.filterElement()

  }

  // set the correct field color
  getStyling(row: number, col: number) {
    if ((row + col) % 2) {
      return 'lightbrown';
    } else {
      return 'lightgrey';
    }
  }
  whichClick(column: string, row: number) {
    if (this.firstClick) {
      this.onTileClick(column, row)
    }
    else {
      this.onTileSecondClick(column, row)
    }
  }
  // if tile gets clicked, get the current piece and math the possible movement
  onTileClick(column: string, row: number) {
    let id = column + row;
    console.log(this.id['_results'])
    console.log(this.service.allCreatedPieces)
    console.log(id)
    // select current piece
    this.service.allCreatedPieces.forEach((arr: []) => {
      arr.forEach((piece: any) => {
        if (piece.fieldNow === id) {
          this.currentPiece = piece;
        }
      })
    })

    // if current piece selected, do smth.
    console.log(this.currentPiece)
    this.firstClick = false;
  }

  onTileSecondClick(column: string, row: number) {
    let id = column + row;
    // select current piece
    console.log(id)
    this.service.allCreatedPieces.forEach((arr: []) => {
      arr.forEach((piece: any) => {
        console.log(piece.fieldNow, id)
        if (piece.fieldNow === id) {
          this.moveThere = piece;
          console.log(this.moveThere)
        }
      })
    })
    console.log(this.moveThere)
    if (this.moveThere == '') {
      console.log('empty')
      this.currentPiece.fieldNow = id;
      this.currentPiece = '';
      this.moveThere = '';
      this.firstClick = true;
    }
    else if (this.moveThere) {
      //check if move possible
    }
  }


  img: string = '';
  checkSource(column: string, row: number) {
    this.img = '';
    let id: string | number = column + row;
    this.service.allCreatedPieces.forEach((arr: []) => {
      arr.forEach((piece: any) => {
        if (piece.fieldNow === id) {
          this.img = piece.img
        }
      })
    })
    return this.img
  }
}
