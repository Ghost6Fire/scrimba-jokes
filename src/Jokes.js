import React from 'react';
import './App.css';

function Jokes(props) {
  return (
    <div className="jokeItems">
      <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
      <p style={{color: !props.punchLine && "#ffffff"}}>Answer/Statement: {props.punchLine}></p>
    </div>
  );
}

export default Jokes;
