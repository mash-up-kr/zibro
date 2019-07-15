import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { a11y } from '../../../styles';
import { ChangeButton } from '../ChangeButton'
import { eventIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    margin-top:31px;
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

const ChangeDate = () => (
  <S.Wrapper>
    <S.Icon src={eventIcon} alt="event-icon" />
    <div className={'changeDate'}>
      <S.Label>예약 날짜</S.Label>
      <S.Field>2019년 05월 03일</S.Field>
    </div>
    <ChangeButton/>
  </S.Wrapper>
);

// ChangeDate.propTypes = {
//   className: PropTypes.string,
// };

// ChangeDate.defaultProps = {
//   className: undefined,
// };

export default ChangeDate;
