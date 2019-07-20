import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    padding:24px;
    border-bottom:1px solid #d7d9ec;
    width: 100%;
    font-size: 16px;
    letter-spacing: 0.7px;
    color: #333333;
  `,
};

const ReserveScript = () => (
  <S.Wrapper>
    언제, 어디로 가는
    <br />
    막차 알림을 예약하시겠어요?
  </S.Wrapper>
);
export default ReserveScript;
