import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const S = {
  Button: styled(Button)`
    width: 100%;
    padding: 12px 16px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.sns.kakao};
    text-align: left;
  `,
};

const KakaoSignInButton = props => (
  <S.Button
    type="button"
    variant="contained"
    {...props}
  >
    카카오톡으로 로그인하기
  </S.Button>
);

export default KakaoSignInButton;
