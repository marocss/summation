import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import RandomNumberButton from './RandomNumberButton';

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };

  state = {
    selectedNumbersIds: [],
  };

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

  gameStatus = () => {
    const sumSelected = this.state.selectedNumbersIds.reduce(
      (accumulator, currentElement) =>
        accumulator + this.randomNumbers[currentElement],
      0,
    );

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

  targetPanelStyle = gameStatus => {};

  randomNumbers = this.generateRandomNumbersArray();
  target = this.generateTargetFromRandomNumbers(this.randomNumbers);

  // TODO: shuffle random numbers to avoid answer  always being the first 4
  render() {
    const gameStatus = this.gameStatus();

    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
          {this.target}
        </Text>

        <View style={styles.randomNumbersSection}>
          {this.randomNumbers.map((number, index) => (
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

        <Text>{gameStatus}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 45,
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
});

export default Game;
