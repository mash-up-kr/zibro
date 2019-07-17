import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  50% {
    transform: translateY(-100%);
  }
`;

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Circle: styled.div`
    float: left;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 12px;
    :nth-child(1) {
      color: #A1B1F7;
      background-color: #A1B1F7;
      animation: ${loading} 1s infinite;
    }
    :nth-child(2) {
      background-color: #A1B1F7;
      animation: ${loading} 1s infinite;
      animation-delay: .1s;
    }
    :nth-child(3) {
      background-color: #A1B1F7;
      animation: ${loading} 1s infinite;
      animation-delay: .2s;
    }
  `,
};

const Loader = () => (
  <S.Wrapper>
    <S.Circle />
    <S.Circle />
    <S.Circle />
  </S.Wrapper>
);

export default Loader;
