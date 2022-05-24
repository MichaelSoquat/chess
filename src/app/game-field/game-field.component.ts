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
  currentPiece: any;
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
  // if tile gets clicked, get the current piece and math the possible movement
  onTileClick(column: string, row: number) {
    let id = column + row;
    console.log(this.id['_results'])
    console.log(this.service.allCreatedPieces)
    if (!this.currentPiece) {
      this.service.allCreatedPieces.forEach((arr: []) => {
        arr.forEach((piece: any) => {
          if (piece.fieldNow == id) {
            this.currentPiece = piece;
            console.log('currentPiece is', this.currentPiece)
          }
        })
      })
    }

    if (this.currentPiece && (this.currentPiece.fieldNow !== id)) {
      this.currentPiece.fieldNow = id;
    } else if (this.currentPiece) { console.log('fail') }
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
