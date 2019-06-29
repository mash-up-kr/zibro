import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 351px;
    background-color: rgba(47, 62, 158, 0.28);
  `,
  Title: styled.div`
    margin: 0 auto;
    padding-top: 130px;
    height: 55px;
    font-family: NotoSansCJKkr;
    font-size: 15px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  Name: styled.span`
    font-size: 21px;
    font-weight: bold;
  `,
};
const HomeHeader = () => (
  <S.Wrapper>
    <S.Title>
      <S.Name>
        고은이
      </S.Name>
        님,
      <div>원하는 막차를 설정해 보세요.</div>
    </S.Title>
  </S.Wrapper>
);

export default HomeHeader;
