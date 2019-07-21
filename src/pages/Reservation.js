import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { debounce } from 'lodash/fp';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { location as locationActions } from '../store/actions';
import {
  OriginField, DestinationField, ReservationField, AppBar,
} from '../components/common';

const Schema = Yup.object().shape({
  sendAt: Yup.number()
    .required(),
  origin: Yup.object({
    longitude: Yup.number(),
    latitude: Yup.number(),
  }),
  destination: Yup.object({
    longitude: Yup.number(),
    latitude: Yup.number(),
  }),
});

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    padding-top: 56px;
  `,
  Main: styled.main`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;
  `,
  Form: styled(Form)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
  Actions: styled.div`
    margin-top: auto;
  `,
  Button: styled(Button)`
    width: 100%;
    margin-top: auto;
    padding: 18px 0;
    color: #FFF;
    font-size: 14px;
    text-align: center;
    border-radius: 0;
  `,
};

const Reservation = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {}, []);
  const handleSearch = useCallback(debounce(100, query => dispatch(
    locationActions.fetchPlacesRequest({ query }),
  )), [dispatch]);

  useEffect(() => {
    // dispatch();
  }, [dispatch]);

  return (
    <S.Wrapper>
      <AppBar>예약하기</AppBar>
      <S.Main>
        <Formik
          initialValues={{
            sendAt: Date.now(),
            origin: {},
            destination: {},
          }}
          validationSchema={Schema}
          onSubmit={handleSubmit}
        >
          <S.Form>
            <FastField name="sendAt" component={ReservationField} />
            <FastField name="origin">
              {fieldProps => <OriginField onSearch={handleSearch} {...fieldProps} />}
            </FastField>
            <FastField name="destination" component={DestinationField}>
              {fieldProps => <DestinationField onSearch={handleSearch} {...fieldProps} />}
            </FastField>
            <S.Actions>
              <S.Button
                type="submit"
                color="primary"
                variant="contained"
              >
                막차 알림 예약하기
              </S.Button>
            </S.Actions>
          </S.Form>
        </Formik>
      </S.Main>
    </S.Wrapper>
  );
};

export default Reservation;
