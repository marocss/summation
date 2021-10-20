import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class components extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    this.props.onPress(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        disabled={this.props.isDisabled}>
        <Text
          style={[
            styles.randomNumber,
            this.props.isDisabled && styles.disabled,
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
  disabled: {
    opacity: 0.3,
  },
});

export default components;
