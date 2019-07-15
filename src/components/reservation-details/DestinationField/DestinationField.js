import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { a11y } from '../../../styles';
import { ChangeButton } from '../ChangeButton'
import { placeIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    padding-top:18px;
    padding-bottom:16px;
    border-bottom:1px solid #d8d8d8;
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

const DestinationField = () => {
  return (
    <S.Wrapper>
    <S.Icon src={placeIcon} alt="place-icon" />
    <div className={'changeRoute'}>
      <S.Label>도착지</S.Label>
      <S.Field>집</S.Field>
    </div>
    <ChangeButton/>
  </S.Wrapper>
  );
};

export default DestinationField;
