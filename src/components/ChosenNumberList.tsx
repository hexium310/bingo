import * as React from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';

export interface ChosenNumberListProps {
  numberList: number[];
  count: number;
}

export interface NumberContainerProps {
  isLatestTen: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`;

const NumberContainer = styled.div`
  display: flex;
  position: relative;
  width: 8%;
  border: solid 1px black;
  margin: 1%;
  justify-content: center;
  align-items: center;
  color: ${(props: NumberContainerProps) => props.isLatestTen ? 'black' : 'silver'};
  border-color: ${(props: NumberContainerProps) => props.isLatestTen ? 'black' : 'silver'};

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &:last-child {
    border-color: red;
    color: red;
  }
`;

const ChosenNumber = styled.div`
  font-size: 4vw;
`

export const ChosenNumberList = (props: ChosenNumberListProps) => {
  const numberList = props.numberList.slice(0, props.count);

  return (
    <Wrapper>
      {numberList.map((v, i) => {
        return (
          <NumberContainer
            key={i}
            isLatestTen={Math.floor(i / 10) >= Math.floor((numberList.length - 1) / 10)}
          >
            <ChosenNumber>{v}</ChosenNumber>
          </NumberContainer>
        )
      })}
    </Wrapper>
  );
};
