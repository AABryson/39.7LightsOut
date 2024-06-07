import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    let rows = nrows
    let cols = ncols
   
    const newArray = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push(<td key={c}>Row {i + 1} Col {c + 1}</td>);
      }
      newArray.push(<tr key={i}>{row}</tr>);
    }

  
}
    

    // TODO: create array-of-arrays of true/false values
    let boardValues = [[f, t, f], [f, f, t], [t, f, f]]
   
    return initialBoard;
  }

  
    // TODO: check the board in state to determine whether the player has won.
    function hasWon() {
      return board.every(function(row){
        row.every(function(cell) {
          !cell
        })
  
      })
  }
//#takes a coordinate for an argument
  function flipCellsAround(coord) {
    setBoard(prevBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const Copyboard = prevBoard.map(r =>[...row])

      flipCell(y, x, Copyboard)
      flipCell(y, x -1, Copyboard)
      flipCell(y, x + 1, Copyboard)
      flipCell(y-1, x, Copyboard)
      flipCell(y + 1, x, Copyboard)

      return Copyboard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon) {
    return <h2>You Win!</h2>
  }

  // TODO

  // make table board

  let Board = []
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`;
      row.push(
          <Cell
              key={coord}
              isLit={board[y][x]}
              flipCellsAroundMe={evt => flipCellsAround(coord)}
          />,
      );
    }
    tblBoard.push(<tr key={y}>{row}</tr>);
  }

  return (
    <table border="1">
      <tbody>{newArray}</tbody>
    </table>
  );


export default Board;
