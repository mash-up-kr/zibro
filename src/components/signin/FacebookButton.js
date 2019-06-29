import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const S = {
  Button: styled(Button)`
    width: 100%;
    padding: 12px 16px;
    border-radius: 0;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.sns.facebook};
    text-align: left;
  `,
};

const FacebookButton = props => (
  <S.Button
    type="button"
    variant="contained"
    {...props}
  >
    페이스북으로 로그인하기
  </S.Button>
);

export default FacebookButton;
