import React from 'react';
import styled from 'styled-components';
import { Title } from '../components/home';

const S = {
  Wrapper: styled.div`
    height: 100%;
    background-color: rgba(47, 62, 158, 0.28);
  `,
};

const Home = () => (
  <S.Wrapper>
    <header>
      <Title />
    </header>
    <main>
      <button type="button">2</button>
    </main>
  </S.Wrapper>

);

export default Home;
