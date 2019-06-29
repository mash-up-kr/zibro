import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppTitle, FacebookButton } from '../components';
import { auth as authActions } from '../store/actions';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 4.5%;
  `,
  AppTitle: styled(AppTitle)`
    margin-bottom: 10vh;
  `,
};

const SignIn = () => {
  const dispatch = useDispatch();

  const signInWithFacebook = useCallback(() => {
    dispatch(authActions.signInWithFacebookRequest());
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.AppTitle />
      <FacebookButton onClick={signInWithFacebook} />
    </S.Wrapper>
  );
};

export default SignIn;
