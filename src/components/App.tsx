import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { shuffle } from 'lodash';

import { Header } from './Header';
import { Bingo } from './Bingo';
import { ChosenNumberList } from './ChosenNumberList';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const numberList = shuffle([...Array(75).fill(0).map((_, i) => i + 1)]);

export const App: React.FunctionComponent = (): React.ReactElement => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Bingo setCount={setCount} count={count} currentNumber={numberList[count - 1]}/>
      <ChosenNumberList numberList={numberList} count={count}/>
    </>
  );
}
