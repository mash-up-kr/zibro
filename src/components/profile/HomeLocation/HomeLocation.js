import React from 'react';
import styled from 'styled-components';
import { ChangeButton } from '../../common';
import { homeIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    padding-top:25px;
    padding-bottom:16px;
    border-bottom:1px solid #d7d9ec;
    width: 100%;
    padding-left:24px;
    display:flex;
    align-items:start;
  `,
  Icon: styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right:9px;
  `,
  Label: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    color: #2f3e9e;
    margin-bottom:8px;
  `,
  Field: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 16px;
    letter-spacing: 0.7px;
  `,
};

const HomeLocation = () => (
  <S.Wrapper>
    <S.Icon src={homeIcon} alt="home-icon" />
    <div className={'HomeLocation'}>
      <S.Label>집 위치</S.Label>
      <S.Field>서울시 강동구 송파동 234</S.Field>
    </div>
    <ChangeButton/>
  </S.Wrapper>
);

export default HomeLocation;
