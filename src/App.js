import React from 'react';
import Jokes from './Jokes'
import jokesData from './jokesData';
import './App.css';

function App() {

const jokeComponents = jokesData.map((joke) => {
  return(
     <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  );
})
  return (
    <div>
      <div>
        <h1 className="tc">Boring jokes by Wim</h1>
        <p className="tc">Scrimba React project</p>
      </div>
      <div className="jokeList">
        {jokeComponents}
      </div>
    </div>
  );
}

export default App;
