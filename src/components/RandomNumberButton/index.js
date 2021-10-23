import React from 'react';

import { Container, Text } from './styles';

// interface RandomNumberButtonProps {
// }

export const RandomNumberButton = ({ id, number, isDisabled, onPress }) => {
  const handlePress = () => {
    onPress(id);
  };

  return (
    <Container onPress={handlePress} disabled={isDisabled}>
      <Text disabled={isDisabled}>{number}</Text>
    </Container>
  );
};
