import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RandomNumberButton } from './RandomNumberButton';
import { shuffle } from 'lodash';

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    secondsToAnswer: PropTypes.number.isRequired,
    handlePlayAgain: PropTypes.func.isRequired,
  };

  state = {
    selectedNumbersIds: [],
    remainingSeconds: this.props.secondsToAnswer,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(
        previousState => ({
          remainingSeconds: previousState.remainingSeconds - 1,
        }),
        () => {
          if (this.state.remainingSeconds === 0) {
            clearInterval(this.intervalId);
          }
        },
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.selectedNumbersIds !== this.state.selectedNumbersIds ||
      nextState.remainingSeconds === 0
    ) {
      this.gameStatus = this.calcGameStatus(nextState);

      if (this.gameStatus !== 'PLAYING') {
        clearInterval(this.intervalId);
      }

      return true;
    }
    return true;
  }

  generateRandomNumbersArray = () => {
    return Array.from({ length: this.props.randomNumberCount }).map(
      () => 1 + Math.floor(10 * Math.random()),
    );
  };

  generateTargetFromRandomNumbers = randomNumbers => {
    return randomNumbers
      .slice(0, this.props.randomNumberCount - 2)
      .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
  };

  isNumberSelected = numberIndex => {
    return this.state.selectedNumbersIds.includes(numberIndex);
  };

  selectNumber = numberIndex => {
    this.setState(previousState => ({
      selectedNumbersIds: [...previousState.selectedNumbersIds, numberIndex],
    }));
  };

  calcGameStatus = nextState => {
    const sumSelected = nextState.selectedNumbersIds.reduce(
      (accumulator, currentElement) =>
        accumulator + this.shuffledRandomNumbers[currentElement],
      0,
    );

    if (nextState.remainingSeconds === 0) {
      return 'LOST';
    }

    if (sumSelected < this.target) {
      return 'PLAYING';
    }
    if (sumSelected > this.target) {
      return 'LOST';
    }
    if (sumSelected === this.target) {
      return 'WON';
    }
  };

  randomNumbers = this.generateRandomNumbersArray();
  target = this.generateTargetFromRandomNumbers(this.randomNumbers);
  gameStatus = 'PLAYING';
  shuffledRandomNumbers = shuffle(this.randomNumbers);

  render() {
    const gameStatus = this.gameStatus;

    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
          {this.target}
        </Text>

        <View style={styles.randomNumbersSection}>
          {this.shuffledRandomNumbers.map((number, index) => (
            <RandomNumberButton
              key={index}
              id={index}
              number={number}
              isDisabled={
                this.isNumberSelected(index) || gameStatus !== 'PLAYING'
              }
              onPress={this.selectNumber}
            />
          ))}
        </View>

        {gameStatus !== 'PLAYING' && (
          <>
            <Text style={styles.message}>
              You {gameStatus.toLocaleLowerCase()}!
            </Text>
            <Button onPress={this.props.handlePlayAgain} title={'Play Again'} />
          </>
        )}
        <Text style={styles.target}>{this.state.remainingSeconds}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 45,
    paddingBottom: 45,
  },
  target: {
    fontSize: 50,
    textAlign: 'center',
    margin: 50,
  },
  randomNumbersSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  randomNumber: {
    textAlign: 'center',
    fontSize: 35,
    width: 100,
    backgroundColor: '#999',
    marginHorizontal: 15,
    marginVertical: 25,
  },
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  message: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 25,
  },
  timer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  },
});

export default Game;
