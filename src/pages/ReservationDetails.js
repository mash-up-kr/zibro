import React from 'react';
import styled from 'styled-components';
import {
  ReservationField, OriginField, DestinationField, AppBar,
} from '../components/common';
import { RouteField } from '../components/reservation-details';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

const ReservationDetails = () => (
  <S.Wrapper>
    <AppBar>알람예약 상세보기</AppBar>
    <ReservationField />
    <OriginField />
    <DestinationField />
    <RouteField />
  </S.Wrapper>
);

export default ReservationDetails;
