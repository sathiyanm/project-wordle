import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState('running')
  function handleGuessSubmit(tentativeGuess){
    const nextGuess = {
      id: crypto.randomUUID(),
      value: tentativeGuess
    }
    const nextGuesses = [...guesses, nextGuess]
    setGuesses(nextGuesses)
    if(tentativeGuess.toUpperCase() === answer) {
      setGameStatus('You Won')
    }
    else if(nextGuesses.length >= 5) {
      setGameStatus('You Lost')
    }
  }
  return <><GuessInput handleGuessSubmit={handleGuessSubmit}></GuessInput><GuessResults gameStatus={gameStatus} answer={answer} guesses={guesses}></GuessResults></>;
}

export default Game;
