import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { FacebookIcon } from '../../../assets';

const S = {
  Button: styled(Button)`
    position: relative;
    width: 100%;
    min-height: 56px;
    padding: 12px 16px;
    border-radius: 2px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.sns.facebook};
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  `,
  FacebookIcon: styled(FacebookIcon)`
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translateY(-50%);
  `,
};

const SignInWithFacebookButton = props => (
  <S.Button
    type="button"
    variant="contained"
    {...props}
  >
    <S.FacebookIcon />
    페이스북으로 시작하기
  </S.Button>
);

export default SignInWithFacebookButton;
