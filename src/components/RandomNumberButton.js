import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class components extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

  handlePress = () => {
    // console.log(this.props.number);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text
          style={[
            styles.randomNumber,
            this.props.isSelected && styles.selected,
          ]}>
          {this.props.number}
        </Text>
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
  selected: {
    opacity: 0.3,
  },
});

export default components;
