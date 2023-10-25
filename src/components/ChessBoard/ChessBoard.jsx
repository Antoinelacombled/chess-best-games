import React from "react";
import "./ChessBoard.scss";
import Tile from "../Tile/Tile";
import pawnLight from "../../assets/chess-pawn-regular-light.svg";
import pawnDark from "../../assets/chess-pawn-solid-dark.svg";
import bishopLight from "../../assets/chess-bishop-regular-light.svg";
import bishopDark from "../../assets/chess-bishop-solid-dark.svg";
import knightLight from "../../assets/chess-knight-regular-light.svg";
import knightDark from "../../assets/chess-knight-solid-dark.svg";
import rookLight from "../../assets/chess-rook-regular-light.svg";
import rookDark from "../../assets/chess-rook-solid-dark.svg";
import queenLight from "../../assets/chess-queen-regular-light.svg";
import queenDark from "../../assets/chess-queen-solid-dark.svg";
import kingLight from "../../assets/chess-king-regular-light.svg";
import kingDark from "../../assets/chess-king-solid-dark.svg";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [];
//dark
for (let i = 0; i < 8; i++) {
  pieces.push({ image: pawnDark, x: i, y: 6 });
}
pieces.push({ image: bishopDark, x: 2, y: 7 });
pieces.push({ image: bishopDark, x: 5, y: 7 });
pieces.push({ image: rookDark, x: 0, y: 7 });
pieces.push({ image: rookDark, x: 7, y: 7 });
pieces.push({ image: knightDark, x: 6, y: 7 });
pieces.push({ image: knightDark, x: 1, y: 7 });
pieces.push({ image: queenDark, x: 3, y: 7 });
pieces.push({ image: kingDark, x: 4, y: 7 });

//light
for (let i = 0; i < 8; i++) {
  pieces.push({ image: pawnLight, x: i, y: 1 });
}
pieces.push({ image: bishopLight, x: 2, y: 0 });
pieces.push({ image: bishopLight, x: 5, y: 0 });
pieces.push({ image: rookLight, x: 0, y: 0 });
pieces.push({ image: rookLight, x: 7, y: 0 });
pieces.push({ image: knightLight, x: 6, y: 0 });
pieces.push({ image: knightLight, x: 1, y: 0 });
pieces.push({ image: queenLight, x: 3, y: 0 });
pieces.push({ image: kingLight, x: 4, y: 0 });

function Chessboard() {
  let board = [];
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;

      let image = undefined;
      pieces.forEach((piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
        }
      });

      board.push(
        <Tile
          key={horizontalAxis[i] + verticalAxis[j]}
          image={image}
          number={number}
        />
      ); // Ajout d'une clé unique pour chaque tuile
    }
  }

  return <div id="chessboard">{board}</div>;
}

export default Chessboard;
