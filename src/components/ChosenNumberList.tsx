import React from 'react';
import styled from 'styled-components';

export interface ChosenNumberListProps {
  numberList: number[];
  count: number;
}

export interface NumberContainerProps {
  isLatestTen: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const NumberListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8%;
  margin: 1%;

  &:first-child {
    color: red;
    font-weight: bold;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border: solid 1px black;
  justify-content: center;
  align-items: center;
  color: ${(props: NumberContainerProps) => props.isLatestTen ? 'black' : 'silver'};
  border-color: ${(props: NumberContainerProps) => props.isLatestTen ? 'black' : 'silver'};
  border-radius: 20%;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  ${NumberListItem}:first-child & {
    border-color: red;
    border-width: 3px;
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
      {numberList.reverse().map((v, i) => {
        return (
          <NumberListItem>
            {numberList.length - i}
            <NumberContainer
              key={i}
              isLatestTen={i < 10}
            >
              <ChosenNumber>{v}</ChosenNumber>
            </NumberContainer>
          </NumberListItem>
        )
      })}
    </Wrapper>
  );
};
