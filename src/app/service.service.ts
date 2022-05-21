import { ElementRef, Injectable } from '@angular/core';
import { Bishop } from './models/bishop.class';
import { Horse } from './models/horse.class';
import { King } from './models/king.class';
import { Pawn } from './models/pawn.class';
import { Queen } from './models/queen.class';
import { Rook } from './models/rook.class';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  rows = [8, 7, 6, 5, 4, 3, 2, 1]
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  king_white!: King;
  king_black!: King;
  queen_white!: Queen;
  queen_black!: Queen;
  rooks_white!: Rook[];
  rooks_black!: Rook[];
  bishops_white!: Bishop[];
  bishops_black!: Bishop[];
  horses_white!: Horse[];
  horses_black!: Horse[];
  pawns_white: Pawn[] = [];
  pawns_black: Pawn[] = [];

  A1: any;
  allFields: any;

  createPieces() {
    this.king_white = new King('assets/img/king_white.png', 'D1', 'white');
    this.king_black = new King('assets/img/king_black.png', 'D8', 'black');
    this.queen_white = new Queen('assets/img/queen_white.png', 'E1', 'white');
    this.queen_black = new Queen('assets/img/queen_black.png', 'E8', 'black');
    this.rooks_white = [new Rook('assets/img/rook_white.png', 'A1', 'white'),
    new Rook('assets/img/rook_white.png', 'H1', 'white')];
    this.rooks_black = [new Rook('assets/img/rook_black.png', 'A8', 'black'),
    new Rook('assets/img/rook_black.png', 'H8', 'black')];
    this.bishops_white = [new Bishop('assets/img/bishop_white.png', 'C1', 'white'),
    new Bishop('assets/img/bishop_white.png', 'F1', 'white')]
    this.bishops_black = [new Bishop('assets/img/bishop_black.png', 'C8', 'black'),
    new Bishop('assets/img/bishop_black.png', 'F8', 'black')];
    this.horses_white = [new Horse('assets/img/horse_white.png', 'B1', 'white'),
    new Horse('assets/img/horse_white.png', 'G1', 'white')];
    this.horses_black = [new Horse('assets/img/horse_black.png', 'B8', 'black'),
    new Horse('assets/img/horse_black.png', 'G8', 'black')]
    for (let i = 0; i <= this.columns.length; i++) {
      this.pawns_white[i] = new Pawn('assets/img/horse_white.png', this.columns[i] + '2', 'white');
      this.pawns_black[i] = new Pawn('assets/img/horse_black.png', this.columns[i] + '7', 'black');
    }
  }

  filterElement() {
    let startTileForKingWhite = this.allFields.filter((tile: ElementRef) => {
      return tile.nativeElement.id == this.king_white.fieldNow;

    })
    console.log(startTileForKingWhite)
    this.A1 = this.king_white.img;
    console.log(this.A1)
  }
}
