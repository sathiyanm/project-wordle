import React, { useState } from "react";

function GuessInput({handleGuessSubmit}) {
  const [tentativeGuess, setTentativeGuess] = useState('')
  function handleSubmit(e){
    e.preventDefault();   
    if(tentativeGuess.length <= 4)  {
      window.alert("doh")
      return
    }
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess('')
    
  }
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {handleSubmit(e);}}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input value={tentativeGuess} required minLength={5} maxLength={5} onChange={(e) => {
        setTentativeGuess(e.target.value.toUpperCase())
      }} id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;
