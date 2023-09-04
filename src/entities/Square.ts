
// A class that represents a square on the board
const Square = class {
    const col : number;
    const row : number;
    const color : string;
    let piece : Piece? = null;

    // @ts-ignore
    constructor(col : number, row : number, color : string) {
        this.col = col;
        this.row = row;
        this.color = color;
    }

    // Returns the color of the square
    // @ts-ignore
    getColor() : string {
        return this.color;
    };

    // Returns the piece on the square
    getPiece() : Piece? {
        return this.piece;
    };
}

// Path: src\entities\Square.ts
export default Square;