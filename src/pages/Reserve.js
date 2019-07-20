/* eslint-disable */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReserveButton, ReserveScript } from '../components';
import {
  DateField, OriginField, DestinationField, AppBar,
} from '../components/common';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  `,
};

const Reserve = () => {
  // const [values, setValues] = useState({ values: [] });

  // const dispatch = useDispatch();

  // const handleChange = useCallback();

  // useEffect(() => {
  //   dispatch();
  // }, []);

  return (
    <S.Wrapper>
      <AppBar
        title="예약하기"
      />
      <ReserveScript />
      <DateField />
      <OriginField />
      <DestinationField />
      <ReserveButton />
    </S.Wrapper>
  );
};

export default Reserve;
