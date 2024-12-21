import { useState } from "react";

const useTie = (board) => {
  const [isTie, setTie] = useState(false);

  const checkTie = () => {
    const isBoardFull = board.every((row) => {
      return row.every((node) => node !== "");
    });

    if (isBoardFull) {
      setTie(true);
    }
  };

  return { isTie, setTie, checkTie };
};

export default useTie;
