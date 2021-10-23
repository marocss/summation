import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const Text = styled.Text`
  text-align: center;
  font-size: 35px;
  width: 100px;
  background-color: #999;
  margin: 25px 15px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

// textAlign: 'center',
// fontSize: 35,
// width: 100,
// backgroundColor: '#999',
// marginHorizontal: 15,
// marginVertical: 25,
