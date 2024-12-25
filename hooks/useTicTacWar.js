import useBoard from "./useBoard";
import usePlayer from "./usePlayer";
import useWinner from "./useWinner";
import useTie from "./useTie";

const useTicTacWar = () => {
  const { board, updateBoard, resetBoard } = useBoard();
  const { player, setPlayer, switchPlayer } = usePlayer();
  const { winner, setWinner, checkWinner } = useWinner(board);
  const { isTie, setTie, checkTie } = useTie(board);

  const handlePress = (ri, ci) => {
    if (board[ri][ci] === "" && !winner) {
      updateBoard(ri, ci, player);
      checkWinner();
      if (!winner) {
        checkTie();
      }
      switchPlayer();
    }
  };

  const handleReset = () => {
    resetBoard();
    setPlayer("X");
    setWinner("");
    setTie(false);
  };

  return {
    board,
    player,
    winner,
    isTie,
    handlePress,
    handleReset,
  };
};

export default useTicTacWar;
