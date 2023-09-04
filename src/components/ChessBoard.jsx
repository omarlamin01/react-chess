import Square from "./Square";

function ChessBoard() {
    const rows = 8;
    const cols = 8;

    const chessboard = Square[rows][cols];

    let index = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let color = "white";
            if (index % 2 === 0) {
                color = "black";
            }
            chessboard[row][col] = <Square color={color} />;
            index++;
        }
    }

    return (
        <div className="grid grid-cols-8 gap-0">
            {chessboard}
        </div>
    );
}

export default ChessBoard;