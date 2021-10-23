/* eslint-disable no-unused-vars */
// /* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';

import {
  Container,
  Target,
  SecondsRemaining,
  Message,
  PlayAgainButton,
} from './styles';
import { generateRandomNumbersArray } from '../../utils/generateRandomNumbersArray';
import { generateTargetFromRandomNumbers } from '../../utils/generateTargetFromRandomNumbers';

// interface GameProps {
// }

let countdownIntervalId;

export const Game = ({
  randomNumberCount,
  secondsToAnswer,
  handlePlayAgain,
}) => {
  const [selectedNumbersIds, setSelectedNumbersIds] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(secondsToAnswer);
  const [gameStatus, setGameStatus] = useState('PLAYING');
  const [target, setTarget] = useState(null);

  useEffect(() => {
    countdownIntervalId = setInterval(() => {
      setRemainingSeconds(r => r - 1);
    }, 1000);

    return () => {
      clearInterval(countdownIntervalId);
    };
  }, []);

  useEffect(() => {
    if (remainingSeconds === 0) {
      clearInterval(countdownIntervalId);
      setGameStatus('LOST');
    }
  }, [remainingSeconds, secondsToAnswer]);

  // const randomNumbers = generateRandomNumbersArray(randomNumberCount);

  // const target = generateTargetFromRandomNumbers(
  //   randomNumbers,
  //   randomNumberCount,
  // );

  return (
    <Container>
      <Target status={gameStatus}>{target}</Target>

      {gameStatus !== 'PLAYING' && (
        <>
          <Message>You {gameStatus.toLocaleLowerCase()}!</Message>
          <PlayAgainButton onPress={handlePlayAgain} title={'Play Again'} />
        </>
      )}

      <SecondsRemaining>{remainingSeconds}</SecondsRemaining>
    </Container>
  );
};
