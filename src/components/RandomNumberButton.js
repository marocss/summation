import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class components extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
  };

  handlePress = () => {
    console.log(this.props.number);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.randomNumber}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  randomNumber: {
    textAlign: 'center',
    fontSize: 35,
    width: 100,
    backgroundColor: '#999',
    marginHorizontal: 15,
    marginVertical: 25,
  },
});

export default components;
