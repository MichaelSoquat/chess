import { Pieces } from "./pieces.class";

export class Bishop extends Pieces {

    constructor(src: string, field: string | number, color: string) {
        super();
        this.img = src;
        this.fieldNow = field;
        this.color = color;

    }

}