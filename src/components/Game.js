import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
  };

  generateRandomNumbers() {
    return Array.from({ length: this.props.randomNumberCount }).map(
      () => 1 + Math.floor(10 * Math.random()),
    );
  }

  generateTarget() {
    return this.randomNumbers
      .slice(0, this.props.randomNumberCount - 2)
      .reduce((accumulator, currentElement) => accumulator + currentElement, 0);
  }

  randomNumbers = this.generateRandomNumbers();

  target = this.generateTarget();

  // TODO: shuffle random numbers to avoid always being the first 4
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>

        <View style={styles.randomNumbersSection}>
          {this.randomNumbers.map((number, index) => (
            <Text style={styles.randomNumber} key={index}>
              {number}
            </Text>
          ))}
        </View>
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
    backgroundColor: '#bbb',
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
});

export default Game;
