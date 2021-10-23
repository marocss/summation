/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import Game from '../../components/GameOld;
import { Game } from '../../components/Game';

// interface HomeProps {
// }

export const Home = () => {
  const [gameId, setGameId] = useState(0);
  const [initialRandomNumberCount, setInitialRandomNumberCount] = useState(6);
  const [initialSecondsToAnswer, setInitialSecondsToAnswer] = useState(10);

  const resetGame = () => {
    const newGameId = gameId + 1;

    setGameId(newGameId);
  };

  return (
    <Game
      key={gameId}
      randomNumberCount={6}
      secondsToAnswer={10}
      handlePlayAgain={resetGame}
    />
  );
};
