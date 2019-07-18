import React from 'react';
import styled from 'styled-components';
import { ChangeButton } from '../../common'
import { placeIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    margin-top:18px;
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
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.54px;
    color: #333333;
  `,
  SubField: styled.div`
    opacity: 0.8;
    font-family: NotoSansCJKkr;
    font-size: 11px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.35px;
    color: #333333;
    margin-top:6px;
  `,
};

const RouteField = () => (
  <S.Wrapper>
    <S.Icon src={placeIcon} alt="place-icon" />
    <div className={'RouteField'}>
      <S.Label>상세 경로</S.Label>
      <S.Field>1시간 40분</S.Field>
      <S.SubField>오후 11:45 ~ 오전 1:30</S.SubField>
    </div>
    <ChangeButton/>
  </S.Wrapper>
);

export default RouteField;
