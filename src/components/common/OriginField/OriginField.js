import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChangeButton from '../ChangeButton';
import { placeIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    padding-top: 18px;
    padding-bottom: 16px;
    border-bottom: 1px solid #d7d9ec;
    width: 100%;
    padding-left: 24px;
    display: flex;
    align-items: start;
  `,
  Icon: styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 9px;
  `,
  Label: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    color: #2f3e9e;
    margin-bottom: 8px;
  `,
  Field: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 16px;
    letter-spacing: 0.7px;
  `,
};

const OriginField = ({ className }) => (
  <S.Wrapper className={className}>
    <S.Icon src={placeIcon} alt="place-icon" />
    <div className="changeRoute">
      <S.Label>출발지</S.Label>
      <S.Field>강남역</S.Field>
    </div>
    <ChangeButton />
  </S.Wrapper>
);

OriginField.propTypes = {
  className: PropTypes.string,
};

OriginField.defaultProps = {
  className: undefined,
};

export default OriginField;
