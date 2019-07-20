import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { daumtools } from '../utils';
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

  const handleClick = () => {
    const encodedURI = encodeURIComponent('https://school.classting.net');

    daumtools.web2app({
      urlScheme: `classting://link?hide_navi=1&url=${encodedURI}`, // iphone : custom scheme
      intentURI: '', // android : intent URI
      appName: 'classting', // application Name (ex. facebook, twitter, daum)
      storeURL: 'http://goo.gl/88kSr', // app store URL
      willInvokeApp: () => {}, // function for logging
      onAppMissing: () => {}, // fallback function (default. move to appstore)
      onUnsupportedEnvironment: () => {}, // fallback function
    });
  };

  return (
    <S.Wrapper>
      <S.AppTitle />
      <button type="button" onClick={handleClick}>
        클릭
      </button>
      <S.ButtonGroup>
        <SignInWithGoogleButton type="button" onClick={signInWithGoogle} />
        <SignInWithFacebookButton type="button" onClick={signInWithFacebook} />
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default SignIn;
