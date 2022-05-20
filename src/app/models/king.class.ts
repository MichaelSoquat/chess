import { Pieces } from "./pieces.class";

export class King extends Pieces {

    constructor(src: string, field: string | number) {
        super();
        this.img = src;
        this.fieldNow = field;

    }

}