import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { debounce } from 'lodash/fp';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { location as locationActions, notification as notificationActions } from '../store/actions';
import {
  OriginField, DestinationField, ReservationField, AppBar, Loader,
} from '../components/common';
import { AlertBefore } from '../components/profile';

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
    padding-top: 60px;
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
  const notification = useSelector(state => state.notification.notification);

  const dispatch = useDispatch();

  const handleSubmit = useCallback((values) => {
    dispatch(notificationActions.createNotificationRequest({ values }));
  }, [dispatch]);
  const handleSearch = useCallback(debounce(100, query => dispatch(
    locationActions.fetchPlacesRequest({ query }),
  )), [dispatch]);

  useEffect(() => () => dispatch(notificationActions.initNotification()), []);

  return (
    <>
      <S.Wrapper>
        <AppBar>예약하기</AppBar>
        <S.Main>
          <Formik
            initialValues={{
              sendAt: Date.now(),
              origin: { latitude: 37.506124, longitude: 127.030828 },
              destination: { latitude: 37.300825, longtitude: 126.849464 },
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
              <FastField name="destination" component={DestinationField} />
              <FastField name="alertBefore" component={AlertBefore} />
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
      {notification.loading && <Loader />}
      {notification.data && <Redirect to="/" />}
    </>
  );
};

export default Reservation;
