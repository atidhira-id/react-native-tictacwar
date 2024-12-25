import { useState } from "react";

const useBoard = () => {
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [board, setBoard] = useState(initialBoard);

  const updateBoard = (ri, ci, player) => {
    const newBoard = [...board];
    newBoard[ri][ci] = player;
    setBoard(newBoard);
  };

  const resetBoard = () => {
    setBoard(initialBoard);
  };

  return { board, updateBoard, resetBoard };
};

export default useBoard;
