import * as React from 'react';

import styled, { css } from 'styled-components';

export interface BingoProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  currentNumber: number;
};

const BingoWrapper = styled.div`
  display: flex;
  height: 70vh;
  /* background-color: papayawhip; */
  background-color: transparent;
  justify-content: center;
  padding: 10px;
`;

const BingoButton = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 20px);
  width: calc(70vh - 20px);
  border-style: none;
  border-radius: 50%;
  background-color: lightgreen;
`;

const buttonText = css`
  display: inline;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;


const MouseOver = styled.div`
  ${buttonText}

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  font-size: 30vh;
  cursor: pointer;

  ${BingoButton}:not(:hover) & {
    display: none;
  }
`;

const FirstMouseOut = styled.div`
  ${buttonText}

  font-size: 30vh;
`;

const MouseOut = styled.div`
  ${buttonText}

  font-size: 45vh;

  ${MouseOver}:hover + & {
    opacity: 0.2;
  }
`;

export const Bingo: React.FunctionComponent<BingoProps> = ({ count, setCount, currentNumber }) => {
  const [clickable, setClickable] = React.useState(true);

  return (
    <BingoWrapper>
      <BingoButton>
        {
          clickable && <MouseOver onClick={() => {
            setCount(count + 1);
            setClickable(false);
            setTimeout(() => {
              setClickable(true);
            }, 2000);
          }}>抽選</MouseOver>
        }
        {
          !currentNumber
            ? <FirstMouseOut>抽選</FirstMouseOut>
            : <MouseOut>{currentNumber}</MouseOut>
        }
      </BingoButton>
    </BingoWrapper>
  );
}
