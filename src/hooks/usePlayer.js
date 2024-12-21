import { useState } from "react";

const usePlayer = () => {
  const [player, setPlayer] = useState("X");

  const switchPlayer = () => {
    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  return { player, setPlayer, switchPlayer };
};

export default usePlayer;
