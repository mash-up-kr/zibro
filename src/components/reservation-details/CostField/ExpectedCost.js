import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { a11y } from '../../../styles';
import { ChangeButton } from '../ChangeButton'
import { cardIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    margin-top:25px;
    padding-bottom:22px;
    border-bottom:1px solid #d8d8d8;
    width: 100%;
    padding-left:33px;
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

const ExpectedCost = () => {
  return (
    <S.Wrapper>
    <S.Icon src={cardIcon} alt="card-icon" />
    <div className={'changeRoute'}>
      <S.Label>예상 비용</S.Label>
      <S.Field>16,000원</S.Field>
    </div>
  </S.Wrapper>
  );
};

export default ExpectedCost;
