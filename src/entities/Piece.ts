// A class that represents a piece on the board
import Square from "./Square";

const Piece = class {
    color : string;
    type : string;
    square : typeof Square;
    actions : () => void;

    // @ts-ignore
    constructor(color : string, type : string, square : typeof Square) {
        this.color = color;
        this.type = type;
        this.square = square;
    }

    // Returns the color of the piece
    // @ts-ignore
    getColor() : string {
        return this.color;
    };

    // Returns the type of the piece
    // @ts-ignore
    getType() : string {
        return this.type;
    };

    // Returns the square the piece is on
    // @ts-ignore
    getSquare() : Square {
        return this.square;
    };

    // Sets the square the piece is on
    // @ts-ignore
    setSquare(square : Square) : void {
        this.square = square;
    };
}

// Path: src\entities\Piece.ts
export default Piece;