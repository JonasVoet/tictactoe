import React from 'react';
import Game from './components/Game';


function App() {
  return (
    <div className="App">
      <h1 className="display-1 text-center">Tic Tac Toe</h1>
      <p className="text-center m-3">A React Game</p>
      <div className="d-flex justify-content-center">
        <Game />
      </div>
      <div className="col text-center">
        <form>
          <button type="submit" className="btn btn-light mt-3 mr-5">New game</button>
        </form>
      </div>

    </div>
  );
}

export default App;
