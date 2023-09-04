import Piece from "./Piece";
// A class that represents a square on the board
const Square = class {
    col : number;
    row : number;
    color : string;
    piece : typeof Piece | null = null;

    // @ts-ignore
    constructor(col : number, row : number, color : string, piece : typeof Piece | null = null) {
        this.col = col;
        this.row = row;
        this.color = color;
        this.piece = piece;
    }

    // Returns the color of the square
    // @ts-ignore
    getColor() : string {
        return this.color;
    };

    // Returns the piece on the square
    getPiece() : typeof Piece | null {
        return this.piece;
    };
}

// Path: src\entities\Square.ts
export default Square;