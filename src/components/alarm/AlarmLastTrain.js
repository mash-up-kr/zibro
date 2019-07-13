import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width:235sp;
    height:52sp;
  `,
  Text: styled.div`
    height: 52px;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 0.61px;
    text-align: center;
    color: #333333;
  `,
  BlodText: styled.div`
    font-weight: bold;
  `,
};

const AlarmLastTrain = () => (
  <S.Wrapper>
    <S.Text>
      건대입구역에서
      <S.BlodText>20분 후</S.BlodText>
택시 탑승 예정
      <div>현위치 - 집까지 예상 비용: 12,300원</div>
    </S.Text>
  </S.Wrapper>
);

export default AlarmLastTrain;
