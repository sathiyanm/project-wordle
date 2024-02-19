import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'
function Cell({letter, status}) {
  return <span className={`cell ${status}`}>{letter}</span>
}
function Guess({value, answer}) {
  const result = checkGuess(value, answer)  
  return range(5).map((num) => {
    return <Cell key={num} letter={result ? result[num].letter : undefined} status={result ? result[num].status : undefined}></Cell>
});
}

export default Guess;
 