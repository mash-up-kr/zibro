import React from 'react';
import styled from 'styled-components';
import {
  DateField, OriginField, DestinationField, AppBar,
} from '../components/common';
import { RouteField } from '../components';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

const ReservationDetails = () => (
  <S.Wrapper>
    <AppBar
      title="알람예약 상세보기"
    />
    <DateField />
    <OriginField />
    <DestinationField />
    <RouteField />
  </S.Wrapper>
);

export default ReservationDetails;
