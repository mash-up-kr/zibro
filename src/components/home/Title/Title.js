import React from 'react';
import styled from 'styled-components';
import { a11y } from '../../../styles';

const S = {
  Title: styled.h2`
    ${a11y}
  `,
};

const Title = () => (
  <S.Title>
    막차 알람
  </S.Title>
);

export default Title;
