import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { GoogleIcon } from '../../../assets';

const S = {
  Button: styled(Button)`
    position: relative;
    width: 100%;
    min-height: 56px;
    padding: 12px 16px;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.54);
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  `,
  GoogleIcon: styled(GoogleIcon)`
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translateY(-50%);
  `,
};

const SignInWithGoogleButton = props => (
  <S.Button
    type="button"
    variant="outlined"
    {...props}
  >
    <S.GoogleIcon />
    구글로 시작하기
  </S.Button>
);

export default SignInWithGoogleButton;
