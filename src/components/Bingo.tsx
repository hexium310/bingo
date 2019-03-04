import * as React from 'react';
import styled, { css } from 'styled-components';
import { random } from 'lodash';

export interface BingoProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  currentNumber: number;
};

const BingoWrapper = styled.div`
  display: flex;
  height: 70vmin;
  justify-content: center;
  padding: 0;
`;

const BingoButton = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 70vmin;
  width: 70vmin;
  border-style: none;
  border-radius: 50%;
  background-color: lightgreen;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 20%;
    width: 30%;
    height: 30%;
    background-color: white;
    filter: blur(20px);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset -11px -23px 8vmin 5px #005500;
    border-radius: 50%;
    filter: blur(6px);
  }
`;

const buttonText = css`
  display: inline;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  user-select: none;
`;

const MouseOver = styled.div`
  ${buttonText}

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  font-size: 25vh;
  cursor: pointer;

  ${BingoButton}:not(:hover) & {
    display: none;
  }
`;

const FirstMouseOut = styled.div`
  ${buttonText}

  font-size: 25vh;
`;

const MouseOut = styled.div`
  ${buttonText}

  font-size: 40vh;

  ${MouseOver}:hover + & {
    opacity: 0.15;
  }
`;

export const Bingo: React.FunctionComponent<BingoProps> = ({ count, setCount, currentNumber }) => {
  const [clickable, setClickable] = React.useState(true);
  const [number, setNumber] = React.useState(0);

  return (
    <BingoWrapper>
      <BingoButton>
        {
          clickable && <MouseOver onClick={async () => {
            const randomNumbers = Array(30).fill(0).map(() => random(0, 75));
            setNumber(0);
            setClickable(false);
            for (const randomNumber of randomNumbers) {
              await new Promise(resolve => {
                setTimeout(() => {
                  setNumber(randomNumber);
                  resolve();
                }, 20);
              });
            }
            setNumber(0);
            setCount(count + 1);
            setTimeout(() => {
              setClickable(true);
            }, 3000);
          }}>抽選</MouseOver>
        }
        {
          !currentNumber && clickable
            ? <FirstMouseOut>抽選</FirstMouseOut>
            : <MouseOut>{number || currentNumber}</MouseOut>
        }
      </BingoButton>
    </BingoWrapper>
  );
}
