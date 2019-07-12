import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppTitle, SignInWithFacebookButton, SignInWithGoogleButton } from '../components/sign-in';
import { auth as authActions } from '../store/actions';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 20vh 0 12vh;
  `,
  AppTitle: styled(AppTitle)`
    margin-bottom: 24vh;
  `,
  ButtonGroup: styled.div`
    width: 90%;
    & > :not(:last-child) {
      margin-bottom: 16px;
    }
  `,
};

const SignIn = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = useCallback(() => {
    dispatch(authActions.signInWithGoogleRequest());
  }, [dispatch]);

  const signInWithFacebook = useCallback(() => {
    dispatch(authActions.signInWithFacebookRequest());
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.AppTitle />
      <S.ButtonGroup>
        <SignInWithGoogleButton type="button" onClick={signInWithGoogle} />
        <SignInWithFacebookButton type="button" onClick={signInWithFacebook} />
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default SignIn;
