"use client"

import '@/styles/playTictactoe.css';
import {useCallback, useEffect, useState} from "react";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function Play() {

  const [isSinglePlayer, setIsSinglePlayer] = useState(false);

  const [xMoves, setXMoves] = useState<number[]>([]);
  const [oMoves, setOMoves] = useState<number[]>([]);
  const grid = Array.from({ length: 9 }, (_, i) => i + 1); // Create an array [1, 2, ..., 9]

  const [turn, setTurn] = useState<string>("X");
  const [lastMove, setLastMove] = useState<string>("");

  const [winner, setWinner] = useState<string>("");
  const [winningCells, setWinningCells] = useState<number[]>([]);
  const [xWins, setXWins] = useState<number>(0);
  const [oWins, setOWins] = useState<number>(0);

  const [isResetting, setIsResetting] = useState(false);

  const resetGame = () => {
    setIsResetting(true);
    setXMoves([]);
    setOMoves([]);
    setTurn("X");
    setWinner("");
    setTimeout(() => setIsResetting(false), 400);
  }

  const handleXMove = (cell: number) => {
    // check if the cell is already occupied
    if (xMoves.includes(cell) || oMoves.includes(cell)) return;
    // if the X player has made 3 moves, remove the oldest move and add the new move
    if (xMoves.length === 3) {
      setXMoves([...xMoves.slice(1), cell]);
    // otherwise, add the move to the list of moves
    } else {
      setXMoves([...xMoves, cell]);
    }
    setTurn("O");
    setLastMove("X");
  }

  const handleOMove = useCallback((cell: number) => {
    // check if the cell is already occupied
    if (xMoves.includes(cell) || oMoves.includes(cell)) return;
    // if the X player has made 3 moves, remove the oldest move and add the new move
    if (oMoves.length === 3) {
      setOMoves([...oMoves.slice(1), cell]);
    // otherwise, add the move to the list of moves
    } else {
      setOMoves([...oMoves, cell]);
    }
    setTurn("X");
    setLastMove("O");
  }, [oMoves, xMoves]);

  useEffect(() => {
    const winningCombos = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7] // diagonals
    ];

    const checkForWinner = (moves: number[], player: string) => {
      for (const combo of winningCombos) {
        if (combo.every(cell => moves.includes(cell))) {
          if (!winner) { // Only set the winner if it hasn't been set yet
            setWinner(`${player} wins!`);
            if (player === "X") {
              setXWins(xWins + 1);
            } else if (player === "O") {
              setOWins(oWins + 1);
            }
          }
          return combo;
        }
      }
    }
    setWinningCells(checkForWinner(xMoves, "X") || checkForWinner(oMoves, "O") || []);
  }, [winner, oMoves, oWins, xMoves, xWins]);

  const handleMove = (cell: number, turn: string) => {
    if (winner) return;
    if (turn === "X") {
      handleXMove(cell);
    } else if (turn === "O" && !isSinglePlayer) {
      handleOMove(cell);
    }
  }

  useEffect(() => {
    const makeComputerMove = () => {
      // make better algorithm for this
      if (!winner) { // this doesn't work, don't really know why, can't figure out a fix
        const availableCells = grid.filter(cell => !xMoves.includes(cell) && !oMoves.includes(cell));
        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        console.log(availableCells, randomCell);
        if (oMoves.length === 3) {
          setOMoves([...oMoves.slice(1), randomCell]);
        } else {
          setOMoves([...oMoves, randomCell]);
        }
        setTurn("X");
        setLastMove("O");
      }
    }

    if (isSinglePlayer && turn === "O") {
      setTimeout(() => makeComputerMove(), 1000);
    }
  }, [winner, xMoves, turn, isSinglePlayer, grid, handleOMove, oMoves]);

  return (
    <div>
      <div className='lg:hidden p-4 mt-24'>
        <h1 className='text-center'>This doesn&apos;t work on mobile :(</h1>
      </div>
      <div className='lg:block hidden'>
        <div className={"page-container"}>
          <div className={"title mt-8"}>
            <a href="/tictactoe" className='absolute top-0 left-0 ml-8 mt-8 p-2 rounded-md border hover:bg-neutral-300 hover:bg-opacity-15 transition-colors'>
              <ChevronLeftIcon className='h-8 w-8' />
            </a>
            <p><em>endless</em></p>
            <h1 className='text-5xl'>
              <span style={{color: "#1872b9"}}>Tic</span> <span style={{color: "#FFD700"}}>Tac</span> <span
              style={{color: "#FE4A49"}}>Toe</span>
            </h1>
          </div>
          <div className={"content"}>
            {winner ? <h2 className={`${lastMove === "X" ? "x" : "o"}`}>{winner}</h2> :
              <h2 className={`${turn === "X" ? "x" : "o"}`}>{`${turn}'s turn`}</h2>}
            <div className="grid-container">
              {grid.map((cell, index) => (
                <div
                  className={`
                  grid-item
                  ${xMoves.includes(cell) ? "x" : ""}
                  ${oMoves.includes(cell) ? "o" : ""}
                  ${winningCells.includes(cell) ? "winner" : ""}
                  ${(turn === "X") && (xMoves.length === 3) && (xMoves[0] === cell) ? "oldest-x" : ""}
                  ${(turn === "O") && (oMoves.length === 3) && (oMoves[0] === cell) ? "oldest-o" : ""}
                  ${!xMoves.includes(cell) && !oMoves.includes(cell) && winner === "" ? "free-cell" : ""}
                  ${isResetting ? "reset-animation" : ""}
                `}
                  key={index}
                  onClick={() => handleMove(cell, turn)}
                >
                  {xMoves.includes(cell) && "X"}
                  {oMoves.includes(cell) && "O"}
                  {!xMoves.includes(cell) && !oMoves.includes(cell) && ""}
                </div>
              ))}
            </div>
            <button onClick={resetGame}>
              Reset Game
            </button>
            <div className={"wins-container"}>
              <div className={"wins"}>
                <p><b>X Wins:</b></p>
                <p>{xWins}</p>
              </div>
              <div className={"wins"}>
                <p><b>O Wins:</b></p>
                <p>{oWins}</p>
              </div>
            </div>
          </div>
          <div className={"spacer"}/>
          <div>
            <p className={"current-mode"}>
              {isSinglePlayer ?
                <span>You are in <span className={"tooltip"}>
                  single player
                  <span className={"tooltip-text"}>
                    You (X) are playing against the computer (O). The computer will make a few seconds after you make a move.
                  </span>
                </span> mode</span>
                :
                <span>You are in <span className={"tooltip"}>
                  two player
                  <span className={"tooltip-text"}>
                    You are playing with real person. You can take turns to make moves.
                  </span>
                </span> mode</span>}
            </p>
            <button className={"swap-mode"} onClick={() => {
              setIsSinglePlayer(!isSinglePlayer);
              resetGame();
            }}>
              Swap Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
