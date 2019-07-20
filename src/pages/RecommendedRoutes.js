import React from 'react';
import styled from 'styled-components';
import { AppBar } from '../components/common';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

const RecommendedRoutes = () => (
  <S.Wrapper>
    <AppBar title="추천 경로" />
  </S.Wrapper>
);

export default RecommendedRoutes;
