import React from 'react';
import Game from './Game';

class App extends React.Component {
  render() {
    return <Game randomNumberCount={6} secondsToAnswer={10} />;
  }
}

export default App;
