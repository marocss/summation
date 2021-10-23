// /* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ddd;
  padding: 50px 0px;
`;

export const Target = styled.Text`
  font-size: 50px;
  text-align: center;
  margin: 50px;

  ${({ status }) => {
    if (status === 'PLAYING') {
      return css`
        background-color: #bbb;
      `;
    }

    if (status === 'LOST') {
      return css`
        background-color: red;
      `;
    }

    if (status === 'WON') {
      return css`
        background-color: green;
      `;
    }
  }}
`;

export const SecondsRemaining = styled.Text`
  font-size: 50px;
  text-align: center;
  margin: 50px;

  background-color: #bbb;
`;

export const Message = styled.Text`
  font-size: 25px;
  text-align: center;
  margin-bottom: 25px;
`;

export const PlayAgainButton = styled.Button`
  font-size: 50px;
  text-align: center;
  margin: 50px;

  background-color: #bbb;
`;
