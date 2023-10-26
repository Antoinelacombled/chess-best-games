import React from "react";
import { useRef } from "react";
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
  let activePiece = null;

  function grabPiece(e) {
    const element = e.target;
    if (element.classList.contains("chess-piece")) {
      console.log(e);

      const x = e.clientX - 22.5;
      const y = e.clientY - 22.5;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }

  function movePiece(e) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboardRef.offsetLeft - 25;
      const minY = chessboardRef.offsetTop - 25;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 35;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 40;
      const x = e.clientX - 22.5;
      const y = e.clientY - 22.5;
      activePiece.style.position = "absolute";
      // activePiece.style.left = `${x}px`;
      // activePiece.style.top = `${y}px`;

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }

  function dropPiece(e) {
    if (activePiece) {
      activePiece = null;
    }
  }

  const chessboardRef = useRef(null);
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

      board.push(<Tile key={`${j}, ${i}`} image={image} number={number} />); // Ajout d'une clé unique pour chaque tuile
    }
  }

  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard"
      ref={chessboardRef}
    >
      {board}
    </div>
  );
}

export default Chessboard;
