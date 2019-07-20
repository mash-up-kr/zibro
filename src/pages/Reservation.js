import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
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
  `,
  Paragraph: styled.p`
    padding: 24px;
    border-bottom: 1px solid #d7d9ec;
    width: 100%;
    font-size: 16px;
    letter-spacing: 0.7px;
    color: #333333;
  `,
  Actions: styled.div`
  `,
  Button: styled(Button)`
    width: 100%;
    margin-top: auto;
    padding: 18px 0;
    background-color: #2F3E9E;
    color: #FFF;
    font-size: 14px;
    text-align: center;
    border-radius: 0;
  `,
};

const Reservation = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {}, []);

  useEffect(() => {
    // dispatch();
  }, [dispatch]);

  return (
    <S.Wrapper>
      <AppBar>예약하기</AppBar>
      <S.Paragraph>
        언제, 어디로 가는
        <br />
        막차 알림을 예약하시겠어요?
      </S.Paragraph>
      <Formik
        initialValues={{
          sendAt: Date.now(),
          origin: {},
          destination: {},
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FastField name="sendAt" component={ReservationField} />
          <FastField name="origin" component={OriginField} />
          <FastField name="destination" component={DestinationField} />
          <S.Actions>
            <S.Button
              type="submit"
              variant="contained"
            >
              막차 알림 예약하기
            </S.Button>
          </S.Actions>
        </Form>
      </Formik>
    </S.Wrapper>
  );
};

export default Reservation;
