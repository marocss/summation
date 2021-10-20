import React from 'react';
import Game from './Game';

// TODO: make the game harder when you play again
// TODO: keep the score
// TODO: update to functional components
// TODO: add styled components
// TODO: add typescript
// TODO: update layout
// TODO: add authentication
// TODO: store user data in a database

class App extends React.Component {
  state = {
    gameId: 0,
  };

  resetGame = () => {
    this.setState(previousState => ({
      gameId: previousState.gameId + 1,
    }));
  };

  render() {
    return (
      <Game
        key={this.state.gameId}
        randomNumberCount={6}
        secondsToAnswer={10}
        handlePlayAgain={this.resetGame}
      />
    );
  }
}

export default App;
