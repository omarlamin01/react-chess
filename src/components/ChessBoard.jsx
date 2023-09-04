import React from "react";

function Chessboard() {
    const rows = 8;
    const cols = 8;

    const chessboard = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const isWhiteSquare = (row + col) % 2 === 0;
            const squareColor = isWhiteSquare ? "bg-white" : "bg-black";

            chessboard.push(
                <div
                    key={`${row}-${col}`}
                    className={`w-12 h-12 flex items-center justify-center ${squareColor}`}
                >
                    {/* You can add chess pieces or other content here */}
                </div>
            );
        }
    }

    return (
        <div className="grid grid-cols-8 gap-0">
            {chessboard}
        </div>
    );
}

export default Chessboard;
