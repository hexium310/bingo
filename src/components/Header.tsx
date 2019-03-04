import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: palevioletred;
  margin: 10px 0;
`;

export const Header = () => (
  <header>
    <Title>ビンゴ抽選機</Title>
  </header>
)
