import React from 'react';
import styled from 'styled-components';
import { DateField, OriginField, DestinationField, AppBar } from '../components/common';
import { RouteField, DetailRoute } from '../components/reservation-details';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `
};

const ReserveDetail = () => {
  return (
    <S.Wrapper>
      <AppBar
        title={'알람예약 상세보기'}
      />
      <DateField />
      <OriginField />
      <DestinationField />
      <RouteField />
      <DetailRoute />
    </S.Wrapper>
  );
};

export default ReserveDetail;
