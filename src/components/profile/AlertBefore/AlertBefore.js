import React from 'react';
import styled from 'styled-components';
import { ChangeButton } from '../../common';
import { activeIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    padding:25px 24px 16px 24px;
    border-bottom:1px solid #d7d9ec;
    width: 100%;
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
  ButtonField: styled.div`
    margin-left:10px;
    margin-right:10px;
    margin-top:14px;
    display:flex;
    flex-wrap:wrap;
  `,
  Button: styled.div`
    width:100px;
    padding:8px 0;
    margin:4px;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
    background-color: #2f3e9e;
    text-align:center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #ffffff;
  `,
};

const AlertBefore = () => (
  <S.Wrapper>
    <S.Icon src={activeIcon} alt="active-icon" />
    <div className="AlertBefore">
      <S.Label>막차 출발 알림</S.Label>
      <S.ButtonField>
        <S.Button>30분 전</S.Button>
        <S.Button>20분 전</S.Button>
        <S.Button>10분 전</S.Button>
      </S.ButtonField>
    </div>
    <ChangeButton />
  </S.Wrapper>
);

export default AlertBefore;
