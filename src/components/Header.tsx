import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: palevioletred;
`;

export const Header = () => (
  <header>
    <Title>ビンゴ抽選機</Title>
  </header>
)
