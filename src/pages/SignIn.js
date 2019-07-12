import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppTitle, FacebookSignInButton } from '../components';
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
  FacebookSignInButton: styled(FacebookSignInButton)`
    margin-bottom: 1vh;
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
      <S.FacebookSignInButton onClick={signInWithFacebook} />
    </S.Wrapper>
  );
};

export default SignIn;
