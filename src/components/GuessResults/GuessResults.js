import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResults({guesses, answer, gameStatus}) {
  return (
    <div className="guess-results">
      <div> <h1>{gameStatus}</h1></div>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <p className="guess">
        <Guess answer={answer} key={num} value={guesses[num] && guesses[num].value ? guesses[num].value : undefined}></Guess>
        </p>
      })}
    </div>
  );
}

export default GuessResults;
