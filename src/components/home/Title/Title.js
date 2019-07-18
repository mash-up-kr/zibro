import React from 'react';
import styled from 'styled-components';

const S = {
  Title: styled.h2`
    color: #424242;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    font-weight: 300;
  `,
};

const Title = () => (
  <S.Title>
    예약 목록
  </S.Title>
);

export default Title;
